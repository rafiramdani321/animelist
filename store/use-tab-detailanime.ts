import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TabDetailsAnimeProps {
  activeTab: string;
  setActiveTab: (slug: string) => void;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useTabDetailsAnime = create<TabDetailsAnimeProps>()(
  persist(
    (set) => ({
      activeTab: "details",
      setActiveTab: (slug) => set({ activeTab: slug }),
      hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
    }),
    {
      name: "tab-details-anime",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
