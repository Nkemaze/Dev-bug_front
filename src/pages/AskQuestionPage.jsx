import { useState } from "react";

const AskQuestionPage = ({ onCancel }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Ask a Question</h2>

      <input
        className="border w-full p-3 rounded mb-4"
        placeholder="Question title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border w-full p-3 rounded mb-4"
        rows="8"
        placeholder="Question details"
      />

      <div className="flex gap-3">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded">
          Submit
        </button>
        <button onClick={onCancel} className="border px-6 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AskQuestionPage;
