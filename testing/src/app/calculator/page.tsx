import { CommandMenu } from "@/components/CommandMenu";
import { ImGithub } from "react-icons/im";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        React Calculator
        <br />
        <a href="https://github.com/xyangst/shadcntester">
          Github<ImGithub />
        </a>
        <CommandMenu/>

      </div>
    </main>
  );
}
