import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar({
  placeholder = "Find me a quiet café for studying...",
  large = false,
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/discover?q=${encodeURIComponent(query)}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className={`glass-card sunlight-shadow rounded-full flex items-center gap-4 transition-transform hover:scale-[1.01] ${large ? "p-2" : "p-1.5"}`}
    >
      <div className="pl-4 text-primary">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/60 outline-none font-body-md ${large ? "py-4 text-body-lg" : "py-2.5 text-body-md"}`}
      />
      <button
        type="submit"
        className="bg-primary text-on-primary rounded-full font-label-md hover:scale-[1.02] active:scale-[0.98] transition-transform flex-shrink-0 px-6 py-3 mr-1"
      >
        Search
      </button>
    </form>
  );
}
