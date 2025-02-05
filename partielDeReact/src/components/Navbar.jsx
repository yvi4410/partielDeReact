import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="desktop-nav">
                <Link to="/"><i className="fas fa-film"></i></Link>
                <ul>
                    <li><Link to="/">Films</Link></li>
                    <li><Link to="/">Séries</Link></li>
                    <li><Link to="/">Populaires</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;