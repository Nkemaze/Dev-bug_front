import { Home, Tag, Trophy, Plus } from "lucide-react";

const Sidebar = ({ onAskQuestion }) => (
  <aside className="w-64 bg-white border-r h-screen p-4">
    <button className="flex gap-2 mb-4"><Home /> Home</button>
    <button className="flex gap-2 mb-4"><Tag /> Tags</button>
    <button className="flex gap-2 mb-4"><Trophy /> Leaderboard</button>

    <button
      onClick={onAskQuestion}
      className="mt-auto bg-indigo-600 text-white w-full py-3 rounded-lg flex justify-center gap-2"
    >
      <Plus /> Ask Question
    </button>
  </aside>
);

export default Sidebar;
