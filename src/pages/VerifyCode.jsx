import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail");

  const verifyHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/auth/verify-code", { email, code });
      navigate("/change-password");
    } catch (err) {
      setError("Invalid or expired code");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={verifyHandler}
        className="bg-white p-8 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Verify Code</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Enter verification code"
          className="w-full border p-2 rounded mb-4"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyCode;
