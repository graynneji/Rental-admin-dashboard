import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  //CREATE CABIN
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    // mutationFn: newcabin=> createCabin(newcabin),
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ querykey: ["cabins"] });
      //   reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
