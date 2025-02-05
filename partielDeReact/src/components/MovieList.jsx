import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
    console.log("Liste des films :", movies); // Vérification

    return (
        <div className="tendances-container">
            <div className="title-filter">
                <h2>{title}</h2>
            </div>
            <div className="grid-tendances">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
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