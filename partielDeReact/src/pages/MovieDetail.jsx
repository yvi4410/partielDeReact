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
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    );
}

export default MovieDetail;