import Header from "./_components/header";
import Navbar from "./_components/navbar";
import TopAnimeHeader from "./_components/navbar/topanime";

const BrowserLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
   <div className="relative">
      <Header />
      <div className="absolute top-8 left-[50%] transform -translate-x-1/2 w-[95%] h-fit bg-gradient-to-r from-backgroundSecondary via-[#2b2b2b] to-backgroundSecondary shadow-lg rounded-xl z-20">
        <Navbar />
        <TopAnimeHeader />
      </div>
      <div className="mt-32">{children}</div>
    </div>
    </>
  )
}

export default BrowserLayout;