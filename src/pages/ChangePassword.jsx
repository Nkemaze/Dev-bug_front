import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      await API.post("/auth/change-password", {
        email,
        newPassword: password,
      });

      localStorage.removeItem("resetEmail");
      navigate("/login");
    } catch (err) {
      setError("Failed to change password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Change Password</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="password"
          placeholder="New password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border p-2 rounded mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
