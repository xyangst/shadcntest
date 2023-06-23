import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { FaGithub,FaHome } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between px-24 py-3">
          <nav className="fixed top-2 left-2">
          <a className="m-2 rounded-md text-3xl " href="https://github.com/xyangst/shadcntester">
          <FaGithub />
        </a>
        <a className=" m-2 rounded-md text-3xl " href="https://github.com/xyangst/shadcntester">
          <FaHome/>
        </a>
            </nav>

        {children}
          </main>
        <Toaster />
      </body>
    </html>
  );
}