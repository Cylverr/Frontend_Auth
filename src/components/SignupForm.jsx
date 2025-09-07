import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";


const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess("Verification link has been sent to your email!");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5  mt-2">
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <input
        type="name"
        placeholder="Full Name"
        className="px-2 min-w-xs py-2 text-[#010101] font-serif border border-red-400"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="px-2 min-w-xs py-2 text-[#010101] font-serif border border-red-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="Phone number"
        placeholder="Phone Number"
        className="px-2 min-w-xs py-2 text-[#010101] font-serif border border-red-400"
      />

      <input
        type="password"
        placeholder="Password"
        className="px-2 min-w-xs  py-2 font-serif border border-red-400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="px-2 min-w-xs  py-2 font-serif border border-red-400"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="submit" disabled={loading} className="bg-red-500 rounded-md min-w-xs py-2 text-[#FAFAFA] font-serif text-base lg:text-lg cursor-pointer">
        Verify Email
      </button>

      <button className="bg-red-500 rounded-md min-w-xs py-2 text-[#FAFAFA] font-serif text-base lg:text-lg cursor-pointer">
      {loading ? <LoadingSpinner /> : "Sign Up"}
      </button>
    </form>
  );
};

export default SignupForm;
