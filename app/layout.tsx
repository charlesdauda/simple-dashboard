'use client'

import { useState } from "react";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar
            isSidebarExpanded={isSidebarExpanded}
            setIsSidebarExpanded={setIsSidebarExpanded}
          />
          <div className="flex-1 flex flex-col">
            <Navbar
              setIsSidebarExpanded={setIsSidebarExpanded}
            />
            <main className="flex-1 overflow-auto">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}