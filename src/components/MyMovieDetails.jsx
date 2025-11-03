import { Link } from "react-router"

const MyMovieDetails = () => {
    return (
        <div className="container min-vh-100">
            <div className="card">
                <div className="card-header">
                    TITOLO FILM
                </div>
                <div className="card-body">
                    <h5 className="card-title text-danger">Special title treatment</h5>
                    <p className="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/Jumbo" className="btn btn-danger">Torna Indietro</Link>
                </div>
            </div>

        </div>
    )
}

export default MyMovieDetails