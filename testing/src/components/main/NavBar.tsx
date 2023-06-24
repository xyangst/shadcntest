import { FaGithub, FaHome } from "react-icons/fa";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
export default function CommandMenu() {
  return (
    <nav className="fixed left-1 top-1 border">
      <Link className=" m-0 rounded-md text-3xl " href="/">
        <FaHome />
      </Link>
      <Link
        target="_blank"
        className="m-0 rounded-md text-3xl "
        href="https://github.com/xyangst/shadcntester"
      >
        <FaGithub />
      </Link>
      <DarkModeSwitch />
    </nav>
  );
}
