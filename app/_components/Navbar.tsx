'use client'

import { Bell, Moon, Search, Menu } from "lucide-react"


interface NavbarProps {
    setIsSidebarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ setIsSidebarExpanded }:NavbarProps) => {
    return (
        <header className="h-16 border-b border-gray-300 flex items-center justify-between px-4 lg:px-6 bg-white">
            <div className="flex items-center gap-3">
                <button onClick={() => setIsSidebarExpanded(true)} className="md:hidden p-2 hover:bg-gray-100 rounded-sm">
                    <Menu size={22}/>
                </button>

                <div className="flex items-center gap-2 border border-gray-300 rounded-sm px-3 w-full max-w-sm">
                    <Search size={20} className="text-gray-500 h-8" />
                    <input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none text-sm"
                    />
                </div>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <Bell size={22} className="text-gray-500" /> 
                    </button>
                    
                    <button className="p-2 rounded-full hover:bg-gray-100">
                    <Moon size={22} className="text-gray-500" />
                </button>
            </div>
        </header>
    )
}


export default Navbar

