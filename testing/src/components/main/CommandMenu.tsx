import { FaCalculator, FaClock, FaQuestion } from "react-icons/fa";
import { GiTicTacToe } from "react-icons/gi";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/command";
import Link from "next/link";
export function CommandDemo() {
  return (
    <Command className="rounded-lg border">
      <CommandInput placeholder="Search" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="">
          <CommandItem>
            <FaCalculator className="mr-2 h-4 w-4" />
            <Link className="w-full" href="/calculator">
              Calculator
            </Link>
          </CommandItem>
          <CommandItem>
            <GiTicTacToe className="mr-2 h-4 w-4" />
            <Link className="w-full" href="/tictactoe">
              Tic Tac Toe
            </Link>
          </CommandItem>
          <CommandItem>
            <FaClock className="mr-2 h-4 w-4" />
            <Link className="w-full" href="/clock">
              Clock
            </Link>
          </CommandItem>
          <CommandItem>
            <FaQuestion className="mr-2 h-4 w-4" />
            <Link className="w-full" href="/faq">
              Infinitely Asked Questions
            </Link>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
