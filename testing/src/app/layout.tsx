import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/shadcn/toaster";
import NavBar from "@/components/main/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "small projects",
  description: "made by xyangst",
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
          <NavBar />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
