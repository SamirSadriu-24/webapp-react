import { Link } from "react-router"

const MyMovieCard = () => {
    return (
        <div className="card mt-5 w-25">
            <img
                src="..."
                className="card-img-top"
                alt="placeholder" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <Link to="/details" className="btn btn-danger">Vai al Film</Link>
            </div>
        </div>
    )
}

export default MyMovieCard