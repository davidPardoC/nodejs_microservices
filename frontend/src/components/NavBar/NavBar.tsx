import Link from "next/link";
import { NewPost } from "../NewPost/NewPost";
import { TbLogout } from "react-icons/tb";
import { getLogedinUser } from "@/utils/getLogedinUser";

const NavBar = () => {
  const user = getLogedinUser();
  return (
    <nav className="flex justify-between py-3 items-center">
      <ul className="flex gap-2 items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        {user && <li className="hidden md:block md:ml-3">
          <NewPost />
        </li>}
      </ul>
      <ul className="flex gap-2">
        {!user && (
          <>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <Link href={"/"} className="flex">
                Logout
                <TbLogout size={"1.5em"} className="ml-2" />
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
