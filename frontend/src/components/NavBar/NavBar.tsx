import Link from "next/link";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <nav className="flex justify-between py-3 items-center">
      <ul className="flex gap-2 items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li className="hidden md:block">
          <Button >New Post +</Button>
        </li>
      </ul>
      <ul className="flex gap-2">
        <li><Link href={"/login"}>Login</Link></li>
        <li><Link href={"/signup"}>SignUp</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
