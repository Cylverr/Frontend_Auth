import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const token = searchParams.get("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!token) {
      setMessage("❌ Invalid or expired link");
      return;
    }

    if (!password || !confirm) {
      setMessage("All fields are required");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    if (password !== confirm) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage("🎉 Password reset successful! You can now log in.");
      setPassword("");
      setConfirm("");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FAFAFA]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-white shadow-lg p-6 rounded-lg w-full max-w-md"
      >
        <h2 className="text-xl font-serif text-gray-700 text-center">Reset Password</h2>

        {message && <p className="text-green-500">{message}</p>}

        <input
          type="password"
          placeholder="New Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          className="border p-2 rounded"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button
          type="submit"
          className="bg-red-500 text-white py-2 rounded hover:bg-red-600 flex justify-center"
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
