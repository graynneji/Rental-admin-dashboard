/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    //mutationFn can only recieve one argument, so we pass an object and destructure that object
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked-out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while checking-out"),
  });
  return { checkout, isCheckingOut };
}
