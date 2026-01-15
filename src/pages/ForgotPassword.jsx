import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await API.post("/auth/forgot-password", { email });
      localStorage.setItem("resetEmail", email);
      navigate("/verify-code");
    } catch (err) {
      setMessage("Failed to send reset code", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>

        {message && <p className="text-red-500 mb-2">{message}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Send Verification Code
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
