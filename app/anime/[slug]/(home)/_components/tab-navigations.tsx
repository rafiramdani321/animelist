import { cn } from "@/lib/utils";
import { useTabDetailsAnime } from "@/store/use-tab-detailanime";
import React from "react";

interface TabItemProps {
  tabs: {
    slug: string;
    label: string;
  }[];
}

const TabNavigations = ({ tabs }: TabItemProps) => {
  const { activeTab, setActiveTab, hasHydrated } = useTabDetailsAnime();
  // change with skeleton soon
  if (!hasHydrated) return null;

  return (
    <div className="flex gap-x-2 px-2 py-1">
      {tabs.map((item) => (
        <button
          key={item.slug}
          onClick={() => setActiveTab(item.slug)}
          className={cn(
            "w-60 hover:bg-secondary/50 text-center hover:font-semibold",
            activeTab === item.slug && "bg-secondary/50 font-semibold"
          )}
        >
          <span className="text-primary text-xs uppercase">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigations;
