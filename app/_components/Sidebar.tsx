'use client'
import { BarChart3, LayoutDashboard, LogOut, Package, Settings, User, Users } from "lucide-react"

const Sidebar = () => {

    return (
        <aside className="flex flex-col w-56 lg:w-64 h-screen border-r border-gray-300 p-5 flex-shrink-0">
            <div className="mb-10">
                <h1 className="text-2xl font-extrabold text-blue-950 mt-4">Admin Dashboard</h1>
            </div>
            <nav className="flex flex-col gap-3">
                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <LayoutDashboard size={20} />
                    Dashboard
                </a>

                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <Users size={20} />
                    Users
                </a>

                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <Package size={20} />
                    Products
                </a>

                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <BarChart3 size={20} />
                    Analytics
                </a>

                <a className="flex items-center gap-2 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <Settings size={20} />
                    Settings
                </a>
            </nav>
            {/* Bottom side of the sidebar */}
            <div className="mt-auto flex flex-col gap-2">
                <a className="flex items-center gap-3 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <User size={20} />
                    Profile
                </a>
                
                <a className="flex items-center gap-3 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                    <LogOut size={20} />
                    LogOut
                </a>
            </div>
        </aside>
    )
}

export default Sidebar;