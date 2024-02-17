import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import InfoSidebar from "@/components/info-sidebar/info-sidebar";
import MainHeader from "@/components/main/main-header";
const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} bg-black text-white flex justify-center`}
      >
        <Sidebar />
        <MainHeader>{children}</MainHeader>
        <InfoSidebar />
      </body>
    </html>
  );
}
