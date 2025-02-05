function MovieCard({ title, image, rating }) {
    return (
        <div className="movie">
            <img src={image} alt={title} />
            <div className="score">
                <p>{Math.round(rating * 10)}%</p>
            </div>
            <h5>{title}</h5>
        </div>
    );
}

export default MovieCard;