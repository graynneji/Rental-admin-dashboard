import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
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

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    // mutationFn: (id) => deleteCabin(id),
    mutationFn: deleteCabinApi,
    //refetch you have to invalidate the cache to refetch the data again
    onSuccess: () => {
      toast.success("Cabin Succesfully Deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
