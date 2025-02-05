function SearchBar() {
    return (
        <div className="search-container">
            <input type="text" placeholder="Rechercher un film..." />
            <button type="submit"><i className="fas fa-search"></i></button>
        </div>
    );
}

export default SearchBar;
