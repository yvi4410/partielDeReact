import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getMovieCredits } from "../api/tmdb";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovieById(id)
            .then((data) => {
                if (!data || data.success === false) {
                    throw new Error("Film introuvable");
                }
                setMovie(data);
            })
            .catch((err) => {
                console.error("Erreur API :", err);
                setError("Impossible de charger les détails du film.");
            });

        getMovieCredits(id)
            .then(setCast)
            .catch((err) => {
                console.error("Erreur API (Casting) :", err);
            });
    }, [id]);

    if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
    if (!movie) return <p style={{ textAlign: "center" }}>Chargement...</p>;

    return (
        <div className="focus-container">
            {/* Bannière */}
            <div
                className="banner"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
                }}
            >
                <div className="content">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="right">
                        <div className="top">
                            <div className="score">{Math.round(movie.vote_average * 10)}%</div>
                            <div className="title-date">
                                <h1>{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
                                <span>
                  {movie.release_date} - {movie.genres?.map((g) => g.name).join(", ")} - {movie.runtime} min
                </span>
                            </div>
                        </div>
                        <div className="synopsis">
                            <h2>Synopsis</h2>
                            <p>{movie.overview || "Synopsis indisponible."}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Casting */}
            <div className="casting">
                <h2>Casting</h2>
                <div className="actors">
                    {cast.length > 0 ? (
                        cast.map((actor) => (
                            <div key={actor.id} className="actor">
                                <img
                                    src={
                                        actor.profile_path
                                            ? `https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`
                                            : "https://via.placeholder.com/138x175?text=No+Image"
                                    }
                                    alt={actor.name}
                                />
                                <h4>{actor.name}</h4>
                                <span>{actor.character}</span>
                            </div>
                        ))
                    ) : (
                        <p>Aucun acteur trouvé.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;