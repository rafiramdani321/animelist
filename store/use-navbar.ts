import { create } from "zustand";

interface NavbarProps {
  isOpen: boolean;
  onClick: () => void;
}

export const useNavbar = create<NavbarProps>((set) => ({
  isOpen: false,
  onClick: () => set((state) => ({ isOpen: !state.isOpen })),
}));
