import { Link } from "react-router"
import MyMovieCard from "./MyMovieCard"

const MyJumbo = () => {
    return (
        <div className="d-flex container p-4 gap-2 flex-wrap justify-content-center min-vh-100 flex-column">
            <h1 className="">Questi sono i tuoi attuali film</h1>
            <div className="d-flex gap-5">
                <MyMovieCard />
                <MyMovieCard />
                <MyMovieCard />
                <MyMovieCard />
                <MyMovieCard />
            </div>
            <Link to="/" className="btn btn-danger mt-5">Vai alla homepage</Link>
        </div>

    )
}

export default MyJumbo