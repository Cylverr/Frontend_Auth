import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    // fake API
    setTimeout(() => {
      localStorage.setItem("authToken", "user-logged-in");
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5  mt-2">
      {error && <p className="text-red-500">{error}</p>}
      
      <input
        type="email"
        placeholder="Email"
        className="px-2 min-w-xs py-2 text-[#010101] font-serif border border-red-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="px-2 min-w-xs  py-2 font-serif border border-red-400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="w-full flex justify-end">
        <Link to="/forgot-password" className="text-red-500 font-serif text-sm lg:text-base cursor-pointer">
          Forgot Password?
        </Link>
      </div>

      <button type="submit"  disabled={loading} className="bg-red-500 rounded-md min-w-xs py-2 text-[#FAFAFA] font-serif text-base lg:text-lg cursor-pointer">
      {loading ? <LoadingSpinner /> : "Sign In"}
      </button>
    </form>
  );
};

export default SigninForm;
