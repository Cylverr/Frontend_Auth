import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage("✅ Reset link has been sent to your email!");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FAFAFA]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-white shadow-lg p-6 rounded-lg w-full max-w-md"
      >
        <h2 className="text-xl font-serif text-gray-700 text-center">Forgot Password</h2>

        {message && <p className="text-green-500">{message}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="bg-red-500 text-white py-2 rounded hover:bg-red-600 flex justify-center"
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
