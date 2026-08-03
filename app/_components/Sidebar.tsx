'use client'

import { BarChart3, LayoutDashboard, LogOut, Package, Settings, User, Users, ChevronLeft } from "lucide-react"
import { useEffect } from "react"
interface SidebarProps {
    isSidebarExpanded:boolean;
    setIsSidebarExpanded:
    React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarExpanded, setIsSidebarExpanded }: SidebarProps)=>{
  useEffect(()=>{
    if(isSidebarExpanded){
      document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "auto"
    }
    return ()=>{
      document.body.style.overflow = "auto"
    }
  },[isSidebarExpanded])
  
       return (
        <>
        {isSidebarExpanded && (
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-black/40 z-30 lg:hidden"
          onClick={
            ()=>setIsSidebarExpanded(false)}>
            </div>
            )
}
        <aside className={`bg-white border-r border-gray-300 p-5 flex flex-col transition-all duration-300 
        fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] ${isSidebarExpanded ? "w-[85%] max-w-[320px]": "w-20"} lg:static lg:h-screen lg:w-64`}>
          <div className="mb-10">
            <h1 className="hidden lg:block text-2xl font-extrabold text-blue-950 mt-4">Admin Dashboard</h1>
            <div className="flex items-center justify-between mt-4 lg:hidden">
                <h1 className="text-2xl font-extrabold text-blue-950">AD</h1>
              {isSidebarExpanded && (
                <button onClick={()=>setIsSidebarExpanded(false)} 
                className="p-2 rounded-md hover:bg-gray-100">
                  <ChevronLeft size={22}/>
                  </button>
                  )}
            </div>
          </div>
          
          <nav className="flex flex-col gap-3">
            <SidebarItem icon={<LayoutDashboard size={20}/>}text="Dashboard" showText={isSidebarExpanded} />
            <SidebarItem icon={<Users size={20}/>} text="Users" showText={isSidebarExpanded} />
            <SidebarItem icon={<Package size={20}/>} text="Products" showText={isSidebarExpanded} />
            <SidebarItem icon={<BarChart3 size={20}/>} text="Analytics" showText={isSidebarExpanded} />
            <SidebarItem icon={<Settings size={20}/>} text="Settings" showText={isSidebarExpanded} />
        </nav>
        
        <div className="mt-auto flex flex-col gap-2">
          <SidebarItem icon={<User size={20}/>} text="Profile" showText={isSidebarExpanded} />
          <SidebarItem icon={<LogOut size={20}/>} text="Logout" showText={isSidebarExpanded} />
        </div>
    </aside>
    </>
      )}
     
         const SidebarItem = ({ icon, text, showText }:{ icon:React.ReactNode; text:string; showText:boolean; })=>{
          return (
          <a className={`flex items-center gap-3 p-3 rounded-sm hover:bg-gray-100 cursor-pointer text-gray-700 ${!showText ? "justify-center lg:justify-start" : "lg:justify-start"}`}>
            {icon}
            <span className={`${showText ? "inline" : "hidden"} lg:inline`}>{text}</span>
            </a>
            )}

            
export default Sidebar