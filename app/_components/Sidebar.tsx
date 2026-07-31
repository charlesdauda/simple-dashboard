'use client'

import { BarChart3, LayoutDashboard, LogOut, Package, Settings, User, Users, ChevronLeft } from "lucide-react"
interface SidebarProps {
    isSidebarExpanded:boolean;
    setIsSidebarExpanded:
    React.Dispatch<React.SetStateAction<boolean>>;

}
const Sidebar = ({ isSidebarExpanded, setIsSidebarExpanded }:SidebarProps)=>{
  
  return (  
  <aside className={`h-screen bg-white border-r border-gray-300 p-5 flex flex-col transition-all duration-300 
    ${isSidebarExpanded ? "w-64":"w-20"} lg:w-64 `} > 
    
    <div className="mb-10">
      <h1 className="hidden lg:block text-2xl font-extrabold text-blue-950 mt-4">Admin Dashboard</h1>
      <div className="flex items-center justify-between mt-4 lg:hidden">
        {isSidebarExpanded && (
          <h1 className="text-2xl font-extrabold text-blue-950">AD</h1>
          )}

          {isSidebarExpanded && (
            <button onClick={() => setIsSidebarExpanded(false)} className="p-2 rounded-md hover:bg-gray-100">
              <ChevronLeft size={22}/>
              </button>
          )
        }
        </div>
        </div>
        
              <nav className="flex flex-col gap-3">
                <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" showText={isSidebarExpanded} />
                <SidebarItem icon={<Users size={20}/>} text="Users" showText={isSidebarExpanded} />
                <SidebarItem icon={<Package size={20}/>} text="Products" showText={isSidebarExpanded} />
                <SidebarItem icon={<BarChart3 size={20}/>} text="Analytics"showText={isSidebarExpanded} />
                <SidebarItem icon={<Settings size={20}/>} text="Settings" showText={isSidebarExpanded} />
            </nav>
                    
                    <div className="mt-auto flex flex-col gap-2">
                      <SidebarItem icon={<User size={20}/>} text="Profile" showText={isSidebarExpanded} /> 
                      <SidebarItem icon={<LogOut size={20}/>} text="Logout"showText={isSidebarExpanded} />
                      </div>
                      </aside>
                      )
                    }

        const SidebarItem = ({ icon, text, showText }:{ icon:React.ReactNode; text:string; showText:boolean; })=>{
          return (
          <a
          className={`flex items-center gap-3 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700 
          ${!showText && "justify-center"}`}>
            {icon}
            {showText && ( <span>{text}</span>)}
            </a>
            )}

export default Sidebar