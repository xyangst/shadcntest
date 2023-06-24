import { FaGithub, FaHome } from "react-icons/fa";
import Link from "next/link";
export default function CommandMenu() {
  return (
    <nav className="fixed top-2 left-2">
      <Link className=" m-2 rounded-md text-3xl " href="/">
        <FaHome />
      </Link>
      <Link
        target="_blank"
        className="m-2 rounded-md text-3xl "
        href="https://github.com/xyangst/shadcntester"
      >
        <FaGithub />
      </Link>
    </nav>
  );
}
