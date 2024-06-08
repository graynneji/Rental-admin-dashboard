import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingAPI } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  //EDIT CABIN
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    // mutationFn: newcabin=> createCabin(newcabin),
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success("setting successfully edited");
      queryClient.invalidateQueries({ querykey: ["settings"] });
      //   reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateSetting };
}
