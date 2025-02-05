import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found">
            <h1>404 - Page introuvable</h1>
            <p>La page que vous cherchez n'existe pas.</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
}

export default NotFound;