import { Link } from "react-router"

const MyMovieCard = ({movie}) => {
    return (
        <div className="card mt-5 comparsa">
            <img
                src={`http://127.0.0.1:3000/${movie.image}`}
                className="card-img-top"
                alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title text-white">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <Link to={`/details/${movie.id}`} className="btn btn-danger pulsa">Vai al Film</Link>
            </div>
            {console.log(movie)}
        </div>
    )
}

export default MyMovieCard