import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import QuestionCard from "../components/QuestionCard";

const SearchResultsPage = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <h2>Search Results</h2>
          <QuestionCard />
          <QuestionCard />
        </main>
      </div>
    </>
  );
};

export default SearchResultsPage;
