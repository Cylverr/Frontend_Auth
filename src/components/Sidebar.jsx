import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  return (
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    <section className="bg-[#FFF] px-20">
      <nav className="flex flex-col lg:px-20 px-10 lg:w-[30%] w-[80%] mt-24 z-40 h-full">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/profile">Profile</NavLink>

        <NavLink to="/dashboard">Receive SMS</NavLink>

        <NavLink to="/settings">Settings</NavLink>

        <NavLink to="/">Logout</NavLink>
      </nav>
    </section>
  );
};

export default Sidebar;
