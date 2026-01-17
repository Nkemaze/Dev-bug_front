import { Search } from "lucide-react";

const Navbar = ({ currentUser }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-indigo-600">
          Developer Bug Zone
        </h1>

        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Search..."
          />
        </div>

        {currentUser && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              {currentUser.avatar}
            </div>
            <span>{currentUser.name}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
