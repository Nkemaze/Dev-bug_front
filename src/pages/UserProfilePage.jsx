import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const UserProfilePage = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <main className="content">
        <h2>User Profile</h2>
        <p>User ID: {id}</p>

        <section>
          <h3>Reputation</h3>
          <p>1200</p>
        </section>

        <section>
          <h3>Questions</h3>
          <p>10 asked</p>
        </section>
      </main>
    </>
  );
};

export default UserProfilePage;
