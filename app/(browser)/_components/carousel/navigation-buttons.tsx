import { ChevronRight } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const NavigationButtons = () => {
  return (
    <div className="flex justify-between mt-5 md:mt-10 xl:mt-16">
      <Button
        variant="default"
        size="default"
        className="uppercase rounded-none shadow-md shadow-background hover:shadow-md hover:shadow-secondary"
      >
        show detail
        <ChevronRight className="text-xl text-secondary font-extralight" />
      </Button>
    </div>
  );
};

export const NavigationButtonsSkeleton = () => {
  return (
    <div className="mt-4">
      <Skeleton className="w-[105px] h-[35px] md:w-[150px]" />
    </div>
  );
};

export default NavigationButtons;
