import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/tmdb";

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getTrendingMovies().then((movies) => {
            setMovie(movies[0]); // Premier film tendance
        });
    }, []);

    if (!movie) return <p>Chargement...</p>;

    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            }}
        >
            <div className="banner-content">
                <h1>{movie.title}</h1>
                <p>{movie.overview.substring(0, 150)}...</p>
            </div>
        </div>
    );
}

export default Banner;