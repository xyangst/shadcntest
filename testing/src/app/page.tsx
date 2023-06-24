import { CommandDemo } from "@/components/main/CommandMenu";
import Head from "next/head";
export default function Home() {
  return (
    <main className="">
      <div className=" w-full max-w-7xl items-center justify-between font-mono text-5xl lg:flex">
        Test React Stuff
      </div>
      <div className=" w-full max-w-7xl items-center justify-between lg:flex">
        small stuff that doesnt really deserve their own repository. feel free
        to clone it or something. WIP
      </div>
      <CommandDemo />
    </main>
  );
}
