import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
    return (
        <div className="tendances-container">
            <div className="title-filter">
                <h2>{title}</h2>
            </div>
            <div className="grid-tendances">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        rating={movie.vote_average}
                    />
                ))}
            </div>
        </div>
    );
}

export default MovieList;