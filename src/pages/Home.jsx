import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-[#FAFAFA] flex flex-col w-full h-screen">
      <Header />

      <h3 className="text-center font-bold font-serif mt-30 lg:mt-42 text-3xl lg:text-4xl text-[#010101] px-10 lg:px-96 leading-relaxed">
        Get High Quality Online{" "}
        <span className="text-red-500">SMS Verification</span> Service Anywhere
        in the World<span className="text-red-500">..!</span>
      </h3>

      <div className="mt-48 flex justify-between px-10 lg:px-20 font-serif">
        <NavLink
          to="/signin"
          className="text-red-500 font-bold text-xl border-b-2 border-red-500"
        >
          Sign in
        </NavLink>
        <NavLink
          to="/signup"
          className="text-[#FAFAFA] font-medium text-xl border border-[#FAFAFA] px-5 lg:px-8 py-1 rounded-lg bg-red-500"
        >
          Sign Up
        </NavLink>
      </div>
    </section>
  );
};

export default Home;
