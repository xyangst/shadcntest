import { FaGithub, FaHome } from "react-icons/fa";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { Button } from "../shadcn/button";
import { Tooltip} from "../shadcn/tooltip";
export default function CommandMenu() {
  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 p-1 m-2 border rounded-xl ">
      <div className="flex flex-col gap-3">
        <Tooltip side="left" info="Go back Home">
          <Button className="p-1" variant="ghost">
        <Link className=" m-0 rounded-md w-10 h-10 text-3xl " href="/">
          <FaHome />
        </Link>
        </Button>
        </Tooltip>
      <Tooltip side="left" info="View Source Code">
        <Button className="p-1" variant="ghost">
      <Link
        target="_blank"
        className="m-0 rounded-md w-10 h-10 text-3xl"
        href="https://github.com/xyangst/shadcntester"
      >
        <FaGithub />
      </Link>
      </Button>

      </Tooltip>
      

      <DarkModeSwitch />
      </div>

    </nav>
  );
}
