import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/tmdb";

function Banner() {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTrendingMovies()
            .then((movies) => {
                if (movies.length > 0) {
                    setMovie(movies[0]); // Prend le premier film tendance
                } else {
                    setError("Aucun film trouvé.");
                }
            })
            .catch((err) => {
                console.error("Erreur API :", err);
                setError("Impossible de charger les films.");
            });
    }, []);

    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!movie) return <p>Chargement...</p>;

    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
                height: "300px", // Taille ajustée selon ton design
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="banner"></div>
        </div>
    );
}

export default Banner;