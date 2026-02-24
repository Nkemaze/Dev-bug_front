import { useEffect, useState } from "react";
import API from "../api/api";
import QuestionCard from "./QuestionCard";
import { useLoading } from "../context/loadingContext";

const QuestionList = ({ filter }) => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        startLoading();

        const res = await API.get(`/questions?filter=${filter}`);
        setQuestions(res.data);

      } catch (err) {
        setError("Failed to load questions");
      } finally {
        stopLoading();
      }
    };

    fetchQuestions();
  }, [filter]); // 👈 refetch when filter changes

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!questions.length) {
    return (
      <p className="text-center text-gray-500">
        No questions found for this filter.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {questions.map((question) => (
        <QuestionCard key={question._id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;