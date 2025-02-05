import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getMovieCredits } from "../api/tmdb";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieById(id).then(setMovie);
        getMovieCredits(id).then(setCast);
    }, [id]);

    if (!movie) return <p>Chargement...</p>;

    return (
        <div className="focus-container">
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
                                <span>{movie.genres.map((g) => g.name).join(", ")} - {movie.runtime} min</span>
                            </div>
                        </div>
                        <div className="synopsis">
                            <h2>Synopsis</h2>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="casting">
                <h2>Casting</h2>
                <div className="actors">
                    {cast.map((actor) => (
                        <div key={actor.id} className="actor">
                            <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`} alt={actor.name} />
                            <h4>{actor.name}</h4>
                            <span>{actor.character}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;