import { Suspense } from "react";
import PageCarousel, { PageCarouselSkeleton } from "./_components/carousel";
import Header from "./_components/header";

const BrowserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="absolute top-[4rem] left-[50%] transform -translate-x-1/2 w-[95%] h-fit bg-gradient-to-r from-backgroundSecondary via-[#2b2b2b] to-backgroundSecondary shadow-lg rounded-sm z-20">
        <Suspense fallback={<PageCarouselSkeleton />}>
          <PageCarousel />
        </Suspense>
      </div>
      <div>{children}</div>
    </>
  );
};

export default BrowserLayout;
