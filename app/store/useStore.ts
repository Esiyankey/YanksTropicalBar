import { create } from "zustand";

type Data = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type StoreState = {
  Data: Data;
  setData: (data: Partial<Data>) => void;
  clearData: () => void;
};

export const useStore = create<StoreState>((set) => ({
  Data: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },

  setData: (data) =>
    set((state) => ({
      Data: {
        ...state.Data,
        ...data,
      },
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