import { ThumbsUp, MessageSquare, Clock } from "lucide-react";

const QuestionCard = ({ question }) => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="font-semibold text-lg">{question.title}</h3>
    <div className="flex gap-3 text-sm text-gray-600 mt-2">
      <ThumbsUp /> {question.votes}
      <MessageSquare /> {question.answers}
      <Clock /> {question.time}
    </div>
  </div>
);

export default QuestionCard;
