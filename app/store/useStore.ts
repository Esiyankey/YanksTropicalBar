import { create } from "zustand";

type data={
  name: string;
  email: string;
  subject: string;
  message: string;
}


export const useStore = create((set) => ({
  Data: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },

  setData: (data: data) =>
    set((state: { Data: data }) => ({
      Data: { ...state.Data, ...data },
    })),

  clearData: () =>
    set({
      Data: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    }),
}));