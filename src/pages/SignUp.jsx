import SignupForm from "../components/SignupForm";

const SignUp = () => {
  return (
    <section className="bg-[#FAFAFA h-screen flex flex-col justify-center items-center px-10 lg:px-20">
      <button className="font-serif font-bold text-red-500 lg:text-xl text-md px-1 border border-red-500 lg:w-35 w-27 text-center rounded-2xl cursor-pointer">
        SMS <span className="font-serif italic text-[#010101]">padi</span>
      </button>

      <p className="text-[#010101] text-lg lg:text-xl font-serif mt-3">
        Create your
        <span className="font-serif text-red-500"> SMS</span>
        <span className="font-serif italic text-[#010101]">padi</span> account
      </p>

      <SignupForm />
    </section>
  );
};

export default SignUp;
