import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "@/components/shadcn/toaster";
import NavBar from "@/components/main/NavBar";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
        <NavBar />
        <main className="flex min-h-screen flex-col items-center justify-between px-24 py-3">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
