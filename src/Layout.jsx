import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex flex-col">
      <Header onIconClick={toggleSidebar} />

      <div className="flex flex-1 w-full bg-[#fafafa]">
        <div className="hidden lg:flex lg:w-[20%] w-[80%]">
          <Sidebar />
        </div>

        <div className="flex lg:hidden">
          <Sidebar open={sidebarOpen} close={closeSidebar} />
        </div>

        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
