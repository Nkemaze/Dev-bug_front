import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import QuestionCard from "../components/QuestionCard";

const QuestionListPage = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <h2>All Questions</h2>

          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </main>
      </div>
    </>
  );
};

export default QuestionListPage;
