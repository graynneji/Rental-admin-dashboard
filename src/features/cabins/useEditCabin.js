import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();

  //EDIT CABIN
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    // mutationFn: newcabin=> createCabin(newcabin),
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ querykey: ["cabins"] });
      //   reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
