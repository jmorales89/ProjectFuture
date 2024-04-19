import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/navigation-bars/top-nav-bar/TopNavBar";
import SideNavBar from "@/components/navigation-bars/side-nav-bar/SideNavBar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
    
      <body className={inter.className}>
        <TopNavBar params={{
          topNavBarTabs: ""
        }}/>
        <SideNavBar/>
        
        {children}
        
        </body>
    </html>
  );
}
