import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"

export const usePostLogin = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (form: {username: string, password:string}) => {
      const res = await axios.post("https://dummyjson.com/auth/login", form)
      return res?.data
    },
    onError: (error) => {
      if(axios.isAxiosError(error) && error?.response?.data) {
        toast.error(error?.response?.data?.message)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["login"]})
    }
  })
}