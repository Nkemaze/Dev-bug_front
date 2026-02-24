import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import API from "../api/api";
import DashboardLayout from "../layouts/DashboardLayout";
import { useLoading } from "../context/loadingContext";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    let isMounted = true;

    const toArray = (data) => {
      if (Array.isArray(data)) return data;
      if (Array.isArray(data?.questions)) return data.questions;
      if (Array.isArray(data?.items)) return data.items;
      return [];
    };

    const fetchResults = async () => {
      setError("");

      if (!query.trim()) {
        if (isMounted) setResults([]);
        return;
      }

      try {
        startLoading();

        // Try backend search endpoint first.
        const res = await API.get("/questions", {
          params: { search: query.trim() },
        });
        const searchResults = toArray(res.data);

        if (searchResults.length > 0) {
          if (isMounted) setResults(searchResults);
          return;
        }

        // Fallback: fetch all and filter client-side
        const all = await API.get("/questions");
        const allQuestions = toArray(all.data);
        const q = query.toLowerCase();
        const filtered = allQuestions.filter((item) => {
          const inTitle = item.title?.toLowerCase().includes(q);
          const inBody = item.body?.toLowerCase().includes(q);
          const inTags = (item.tags || []).some((t) => t.toLowerCase().includes(q));
          return inTitle || inBody || inTags;
        });

        if (isMounted) setResults(filtered);
      } catch (err) {
        console.error("Search failed:", err);
        if (isMounted) {
          setResults([]);
          setError("Failed to fetch search results");
        }
      } finally {
        stopLoading();
      }
    };

    fetchResults();

    return () => {
      isMounted = false;
    };
  }, [query, startLoading, stopLoading]);

  return (
    <DashboardLayout>
      <div className="layout">
        <main className="content">
          <h2 className="text-xl font-semibold mb-4">Search Results for "{query}"</h2>

          {error && <p className="text-red-500">{error}</p>}

          {!query.trim() ? (
            <p className="text-gray-500">Enter a query in the search bar to find questions.</p>
          ) : results.length === 0 ? (
            <p className="text-gray-500">No results found.</p>
          ) : (
            <div className="space-y-4">
              {results.map((q) => (
                <QuestionCard key={q._id} question={q} />
              ))}
            </div>
          )}
        </main>
      </div>
    </DashboardLayout>
  );
};

export default SearchResultsPage;
