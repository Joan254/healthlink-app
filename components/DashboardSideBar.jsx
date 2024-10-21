import {
    FileTextOutlined,
    UserOutlined,
    LogoutOutlined,
    MedicineBoxOutlined,
  } from "@ant-design/icons";
  import Image from "next/image";
  import Logo from '/public/icons/logo-black-transparent.png';
  
  export default function Sidebar({ isSidebarOpen }) {
    return (
      <div
        className={`bg-cyan-500 text-white w-64 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}
      >
        <h1 className="text-2xl font-semibold text-center mb-8">
         <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </h1>
        <nav className="space-y-4">
          <a
            href="/treatments"
            className="flex items-center space-x-2 hover:bg-blue-600 px-4 py-2 rounded"
          >
            <MedicineBoxOutlined className="text-lg" /> <span>Treatments</span>
          </a>
          <a
            href="/directory"
            className="flex items-center space-x-2 hover:bg-blue-600 px-4 py-2 rounded"
          >
            <UserOutlined className="text-lg" /> <span>Hospital Directory</span>
          </a>
          <a
            href="/prescriptions"
            className="flex items-center space-x-2 hover:bg-blue-600 px-4 py-2 rounded"
          >
            <FileTextOutlined className="text-lg" /> <span>Prescriptions</span>
          </a>
          <a
            href="/logout"
            className="flex items-center space-x-2 hover:bg-blue-600 px-4 py-2 rounded"
          >
            <LogoutOutlined className="text-lg" /> <span>Logout</span>
          </a>
        </nav>
      </div>
    );
  }
  