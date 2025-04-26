import Header from "../(browser)/_components/header";

const AnimeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="mt-32 px-48">{children}</div>
    </>
  );
};

export default AnimeLayout;
