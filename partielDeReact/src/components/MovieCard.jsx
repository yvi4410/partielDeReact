import { Link } from "react-router-dom";

function MovieCard({ id, title, image, rating }) {
    console.log("ID du film dans MovieCard :", id); // Vérification

    return (
        <div className="movie">
            <Link to={`/movie/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <div className="score">
                <p>{Math.round(rating * 10)}%</p>
            </div>
            <h5>{title}</h5>
        </div>
    );
}

export default MovieCard;