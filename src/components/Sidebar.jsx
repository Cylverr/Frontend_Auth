import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ open, close }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };


  return (
    <>
      {open && <div onClick={close} className="fixed inset-0 z-20"></div>}

      <div
        className={`fixed flex flex-col top-20 h-screen bg-[#FAFAFA] lg:px-20 px-10 pt-8 z-30 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col font-serif font-medium">
          <NavLink to="/" className=" py-3 text-lg hover:text-red-500 ">
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className=" py-3 text-lg hover:text-red-500 "
          >
            Dashboard
          </NavLink>

          <NavLink to="/profile" className=" py-3 text-lg hover:text-red-500 ">
            Profile
          </NavLink>

          <NavLink
            to="/dashboard"
            className=" py-3 text-lg hover:text-red-500 "
          >
            Receive SMS
          </NavLink>

          <NavLink to="/settings" className="py-3 text-lg hover:text-red-500 ">
            Settings
          </NavLink>

          <button
        onClick={handleLogout}
        className="py-3 text-lg text-left hover:text-red-500"
      >
        Logout
      </button>
        </nav>

        <div className="flex flex-col justify-start items-start mt-52 md:mt-[800px] lg:">
          <p className="bg-red-500 border border-[#010101] rounded-full w-14 h-14 flex justify-center items-center shadow-2xl mb-1">
            <p className="text-center font-serif text-4xl text-[#FAFAFA] font-extrabold">
              A
            </p>
          </p>

          <p className="text-xl font-medium font-serif text-[#010101]">
            Adekola Boluwatife
          </p>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col mt-18 lg:h-screen fixed lg:pt-8 lg:pl-20 lg:bg-[#FAFAFA]">
        <nav className="flex flex-col font-serif font-medium">
          <NavLink
            onClick={close}
            to="/"
            className=" py-3 text-lg hover:text-red-500 "
          >
            Home
          </NavLink>

          <NavLink
            onClick={close}
            to="/dashboard"
            className=" py-3 text-lg hover:text-red-500 "
          >
            Dashboard
          </NavLink>

          <NavLink
            onClick={close}
            to="/profile"
            className=" py-3 text-lg hover:text-red-500 "
          >
            Profile
          </NavLink>

          <NavLink
            onClick={close}
            to="/dashboard"
            className=" py-3 text-lg hover:text-red-500 "
          >
            Receive SMS
          </NavLink>

          <NavLink
            onClick={close}
            to="/settings"
            className="py-3 text-lg hover:text-red-500 "
          >
            Settings
          </NavLink>

          <button onClick={handleLogout} className="py-3 text-lg text-left hover:text-red-500">
            Logout
          </button>
        </nav>

        <div className="flex flex-col justify-center items-center mt-40 md:mt-64 lg:mt-60">
          <p className="bg-red-500 border border-[#010101] rounded-full w-14 h-14 flex justify-center items-center shadow-2xl mb-1">
            <p className="text-center font-serif text-4xl text-[#FAFAFA] font-extrabold">
              A
            </p>
          </p>

          <p className="text-xl font-medium font-serif text-[#010101]">
            Adekola Boluwatife
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
