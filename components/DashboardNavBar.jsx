import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-50">
      <button className="text-blue-800 md:hidden" onClick={toggleSidebar}>
        <MenuOutlined className="text-xl" />
      </button>
      <h2 className="text-xl font-semibold">HealthLink Portal</h2>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Welcome, User!</span>
        <Avatar size={40} icon={<UserOutlined />} />
      </div>
    </header>
  );
}
