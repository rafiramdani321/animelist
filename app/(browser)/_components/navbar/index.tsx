import Actions from "./actions";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full h-20 top-0 bg-background px-2 lg:px-10 items-center shadow-sm">
      <Logo />
      <Actions />
    </nav>
  )
}

export default Navbar;