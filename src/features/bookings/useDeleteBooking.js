import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  // const p = useMutation({
  //   // mutationFn: (id) => deleteCabin(id),
  //   mutationFn: deleteCabin,
  //   //refetch you have to invalidate the cache to refetch the data again
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["cabins"],
  //     });
  //   },
  // });

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    // mutationFn: (id) => deleteCabin(id),
    mutationFn: deleteBookingApi,
    //refetch you have to invalidate the cache to refetch the data again
    onSuccess: () => {
      toast.success("Booking Succesfully Deleted");
      //Invalidate all the query that has bookings
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
