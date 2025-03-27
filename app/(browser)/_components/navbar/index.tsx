import Actions from "./actions";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="absolute top-6 z-50 left-1/2 transform -translate-x-1/2 px-6 md:px-10 xl:px-36 flex justify-between w-[95%] h-20 self-center items-center bg-backgroundSecondary rounded-t-md shadow-none border-none">
      <Logo />
      <Actions />
    </nav>
  );
};

export default Navbar;
