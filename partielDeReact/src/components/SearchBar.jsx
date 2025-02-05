import { useState } from "react";
import { searchMovies } from "../api/tmdb";

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        searchMovies(query).then(onSearch);
    };

    return (
        <div className="search-container">
            <input type="text" placeholder="Rechercher un film..." onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}><i className="fas fa-search"></i></button>
        </div>
    );
}

export default SearchBar;