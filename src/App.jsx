import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyCode from "./pages/VerifyCode";
import ChangePassword from "./pages/ChangePassword";
import AskQuestionPage from "./pages/AskQuestionPage";

// NEW PAGES
import QuestionListPage from "./pages/QuestionListPage";
import QuestionDetailsPage from "./pages/QuestionDetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import TagsPage from "./pages/TagsPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/change-password" element={<ChangePassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ask" element={<AskQuestionPage />} />

        {/* STACK OVERFLOW PAGES */}
        <Route path="/questions" element={<QuestionListPage />} />
        <Route path="/questions/:id" element={<QuestionDetailsPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/users/:id" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
