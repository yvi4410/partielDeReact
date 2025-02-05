import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            {/* Desktop Nav */}
            <nav className="desktop-nav">
                <Link to="/"><i className="fas fa-film"></i></Link>
                <ul>
                    <li><Link to="/">Films</Link></li>
                    <li><Link to="/">Séries</Link></li>
                    <li><Link to="/">Populaires</Link></li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav id="mobileNav">
                <Link to="/"><i className="fas fa-film"></i></Link>
            </nav>
        </>
    );
}

export default Navbar;