'use client'

import { BarChart3, LayoutDashboard, LogOut, Package, Settings, User,  Users, X } from "lucide-react"

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {

    return (
        <aside className={`fixed top-0 left-0 z-50 h-screen bg-white border-r border-gray-300 p-5 w-64 flex flex-col transition-transform duration-300
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:static lg:translate-x-0 `} >

            {/* Close Button Mobile */}
            <div className="flex justify-end lg:hidden mb-4">
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 rounded-md hover:bg-gray-100" >
                    <X size={22} />
                </button>
            </div>

            <div className="mb-10">
                <h1 className="text-2xl font-extrabold text-blue-950 mt-4 hidden lg:block">
                    Admin Dashboard
                </h1>
                <h1 className="text-2xl font-extrabold text-blue-950 mt-4 lg:hidden">
                    AD
                </h1>
            </div>

            <nav className="flex flex-col gap-3">
                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <LayoutDashboard size={20}/>
                    <span className={`${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                        Dashboard
                    </span>
                </a>

                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <Users size={20}/>
                    <span className={`${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                        Users
                    </span>
                </a>

                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <Package size={20}/>
                    <span className={`${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                        Products
                    </span>
                </a>

                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <BarChart3 size={20}/>
                    <span className={`${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                        Analytics
                    </span>
                </a>

                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <Settings size={20}/>
                    <span className={`${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                        Settings
                    </span>
                </a>
            </nav>

            {/* Bottom */}
            <div className="mt-auto flex flex-col gap-2">
                <a className="flex items-center gap-3 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <User size={20}/>
                    <span className={`${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                        Profile
                    </span>
                </a>

                <a className="flex items-center gap-3 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <LogOut size={20}/>
                    <span className={`${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                        Logout
                    </span>
                </a>
            </div>
        </aside>
    )
}

export default Sidebar;