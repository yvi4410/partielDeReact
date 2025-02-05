import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/tmdb";
import MovieList from "../components/MovieList";
import Banner from "../components/Banner";

function Home() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setTrending);
    }, []);

    return (
        <div>
            <Banner />
            <MovieList title="Films Tendance" movies={trending} />
        </div>
    );
}

export default Home;