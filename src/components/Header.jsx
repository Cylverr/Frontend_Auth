import ThemeToggle from "./ThemeToggle";

const Header = ({ onIconClick }) => {
  return (
    <section className="bg-[#FFF] flex justify-between shadow-2xl lg:px-20 lg:py-8 px-10 py-7 fixed w-full z-50">
      <button
        onClick={onIconClick}
        className="font-serif font-bold text-red-500 lg:text-xl text-md px-1 border border-red-500 lg:w-35 w-27 text-center rounded-2xl cursor-pointer"
      >
        SMS<span className="font-serif italic text-[#010101]">padi</span>
      </button>

      <ThemeToggle />
    </section>
  );
};

export default Header;
