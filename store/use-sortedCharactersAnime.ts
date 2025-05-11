import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SortedCharactersAnimeProps {
  activeSorted: string;
  setActiveSorted: (name: string) => void;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useSortedCharactersAnime = create<SortedCharactersAnimeProps>()(
  persist(
    (set) => ({
      activeSorted: "Main Role",
      setActiveSorted: (name) => set({ activeSorted: name }),
      hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
    }),
    {
      name: "sorted-characters-anime",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
