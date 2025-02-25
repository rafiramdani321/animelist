import Navbar from "./_components/navbar";

const BrowserLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
    </>
  )
}

export default BrowserLayout;