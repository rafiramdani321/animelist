import Actions from "./actions";
import Logo from "./logo";

const Navbar = () => {
  return (
   <nav className="mt-5 px-4 md:px-10 xl:px-36 flex justify-between w-full">
      <Logo />
      <Actions />
    </nav>
  )
}

export default Navbar;