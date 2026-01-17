import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import QuestionCard from "../components/QuestionCard";
import { mockQuestions } from "../data/mockData";

const HomePage = ({ currentUser, onAskQuestion }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentUser={currentUser} />
      <div className="flex">
        <Sidebar active="home" onAskQuestion={onAskQuestion} />
        <main className="flex-1 p-6 max-w-6xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Recent Questions</h2>
          {mockQuestions.map(q => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
