'use client'

import { Bell, Moon, Search } from "lucide-react";

const Navbar = () => {
    return (
        <header className="h-16 border-b border-gray-300 flex items-center justify-between px-4 lg:px-6 bg-white">
            <div className="flex items-center gap-2 border border-gray-300 rounded-sm px-3 w-full max-w-sm">
                <Search size={20} className="text-gray-500 h-8 " />
                <input 
                type="text"
                placeholder="Search..."
                className="w-full outline-none text-sm"
                 />
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
            <button className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition">
                <Bell size={22}  className="text-gray-500"/>
            </button>
            <button className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition ">
                <Moon size={22} className="text-gray-500" />
            </button>
            </div>
        </header>
    )
}

export default Navbar;