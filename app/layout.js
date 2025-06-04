import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidenav from "./components/sidenav/SidenavMainComponent";
import { nunitosans } from "@/app/ui/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kamil Golec // Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" overflow-x-hidden w-screen">
      <body
        className={`${nunitosans.className} ${geistMono.variable} antialiased flex items-stretch text-white min-w-screen relative`}
      >
        <Sidenav />
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
