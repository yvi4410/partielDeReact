import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/tmdb";
import MovieList from "../components/MovieList";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setMovies);
    }, []);

    return (
        <div>
            <Banner />
            <SearchBar onSearch={setMovies} />
            <MovieList title="Films Tendance" movies={movies} />
        </div>
    );
}

export default Home;