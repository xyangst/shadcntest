import { CommandDemo } from "@/components/main/CommandMenu";
import Head from "next/head";
export default function Home() {
  return (
    <main className="">
      <div className=" w-full max-w-7xl items-center justify-between text-3xl font-mono lg:flex">
        Testing repo.
        <br />
      </div>
      <CommandDemo />
    </main>
  );
}
