import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import { useLoading } from "../context/Loadingcontext";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { isLoading } = useLoading();

  return (
    <div className="h-screen overflow-hidden">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 relative overflow-y-auto bg-gray-50 p-4 md:p-6 md:ml-64">
          {children}
          {isLoading && <Loader />}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
