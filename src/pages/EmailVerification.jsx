import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const EmailVerification = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      return;
    }

    setTimeout(() => {
      if (token === "123abc") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 2000);
  }, [searchParams]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FAFAFA]">
      {status === "loading" && (
        <div className="flex flex-col items-center gap-3">
          <LoadingSpinner />
          <p className="text-lg font-serif text-gray-[#010101]">
            Verifying your email...
          </p>
        </div>
      )}

      {status === "success" && (
        <p className="text-lg font-serif text-green-600">
          🎉 Email verified successfully! You can now log in.
        </p>
      )}

      {status === "error" && (
        <p className="text-lg font-serif text-red-600">
          {" "}
          ❌ Invalid or expired token.
        </p>
      )}
    </div>
  );
};

export default EmailVerification;
