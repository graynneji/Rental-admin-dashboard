import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  //UPDATE USER
  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    // mutationFn: newcabin=> createCabin(newcabin),
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");

      //update the data manually in the cache asides from the invalidateQueries take the parameter from onSuccess({user})
      queryClient.setQueryData(["user"], user);
      //   queryClient.invalidateQueries({ querykey: ["user"] });
      //   reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateUser };
}
