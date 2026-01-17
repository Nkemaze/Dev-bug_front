import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const TagsPage = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <h2>Tags</h2>

          <div className="tags">
            <span>#javascript</span>
            <span>#react</span>
            <span>#nodejs</span>
            <span>#mongodb</span>
          </div>
        </main>
      </div>
    </>
  );
};

export default TagsPage;
