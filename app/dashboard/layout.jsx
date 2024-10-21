"use client";
import { useState } from "react";
import Sidebar from "@/components/DashboardSideBar";
import Navbar from "@/components/DashboardNavBar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      
      {/* Sidebar will be shown below the Navbar on smaller screens */}
      <div className={`flex h-full ${isSidebarOpen ? "block" : "hidden"} md:flex`}>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
