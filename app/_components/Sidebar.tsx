'use client'

import { BarChart3, LayoutDashboard, LogOut, Package, Settings, User, Users } from "lucide-react"
interface SidebarProps {
    isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {

    return (
        <aside className={`flex flex-col ${isSidebarOpen ? "w-64" : "w-20"} lg:w-64 min-h-screen border-r border-gray-300 p-5 flex-shrink-0 transition-all duration-300 `} >
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