import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    // mutationFn: (newCabin) => createCabin(newCabin),
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User account succesfully updated");
      // queryClient.setQueryData(['user'],user) // manuel cache güncelleme
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
