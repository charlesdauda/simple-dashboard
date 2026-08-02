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
        <div className="flex h-screen overflow-hidden">
          <Sidebar
            isSidebarExpanded={isSidebarExpanded}
            setIsSidebarExpanded={setIsSidebarExpanded}
          />
          <div className="flex-1 flex flex-col">
            <Navbar
              setIsSidebarExpanded={setIsSidebarExpanded}
            />
            <main className="flex-1 overflow-y-auto ml-20 lg:ml-0">
              {children}
            </main>
            <div className="ml-20 lg:ml-0">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}