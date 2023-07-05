import { FaGithub, FaHome } from "react-icons/fa";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { Button } from "../shadcn/button";
import SimpleTooltip from "../ui/SimpleTooltip";
export default function CommandMenu() {
  return (
    <nav className="fixed left-0 top-1/2 m-2 -translate-y-1/2 rounded-xl border p-1 ">
      <div className="flex flex-col gap-3">
        <SimpleTooltip side="left" content="Go back Home">
          <Button className="h-10 w-10 rounded-md p-1 text-3xl" variant="ghost">
            <Link href="/">
              <FaHome />
            </Link>
          </Button>
        </SimpleTooltip>
        <SimpleTooltip side="left" content="View Source Code">
          <Button className="h-10 w-10 rounded-md text-3xl" variant="ghost">
            <Link
              target="_blank"
              href="https://github.com/xyangst/shadcntester"
            >
              <FaGithub />
            </Link>
          </Button>
        </SimpleTooltip>

        <DarkModeSwitch />
      </div>
    </nav>
  );
}
