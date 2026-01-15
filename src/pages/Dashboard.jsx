import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Developer Bug Zone</h1>
        <button
          onClick={logout}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold">
          Welcome, {user?.name} 👋
        </h2>

        <p className="mt-2 text-gray-600">
          This is your dashboard. From here you can ask questions, answer others,
          and grow your reputation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Your Reputation</h3>
            <p className="text-2xl text-blue-600">{user?.reputation || 0}</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Questions Asked</h3>
            <p className="text-2xl">0</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Answers Given</h3>
            <p className="text-2xl">0</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
