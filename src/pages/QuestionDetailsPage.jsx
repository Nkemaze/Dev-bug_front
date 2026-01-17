import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const QuestionDetailsPage = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <h2>Question Details</h2>

          <p><strong>Question ID:</strong> {id}</p>

          <section>
            <h3>Question Title</h3>
            <p>Full question description goes here...</p>
          </section>

          <section>
            <h3>Answers</h3>
            <p>No answers yet.</p>
          </section>
        </main>
      </div>
    </>
  );
};

export default QuestionDetailsPage;
