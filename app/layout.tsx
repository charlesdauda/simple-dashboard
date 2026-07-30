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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
         <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            {isSidebarOpen && (
              <div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
              />
)}
          <div className="flex-1 flex flex-col">
            <Navbar 
              setIsSidebarOpen={setIsSidebarOpen}
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
