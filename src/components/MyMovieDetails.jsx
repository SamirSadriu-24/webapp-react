import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import MyReviewForm from "./MyReviewForm";

const MyMovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/movies/${id}`)
            .then(res => {
                setMovie(res.data[0] || res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className="container min-vh-100 comparsa">
            <div className="card_single">
                {console.log(movie)}
                <div className="card-header">
                    <h2 className="text-danger">{movie?.title}</h2>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-white">{movie?.director}</h5>
                    <p className="card-text text-danger fst-italic mb-0">{movie?.genre}</p>
                    <p className="card-text text-white mb-4">{movie?.release_year}</p>
                    <div className="movie_info mb-5">
                        <img
                            src={`http://127.0.0.1:3000/${movie?.image}`}
                            className="card-img-top rounded-3 border border-danger"
                            alt={movie?.title} />
                        <div className="info">
                            <ul>
                                <li>
                                    <h5 className="text-danger">DESCRIZIONE</h5>
                                    <p className="card-text text-white">{movie?.abstract}</p>
                                </li>
                                <li className="mt-5">
                                    <h5 className="text-danger">RECENSIONI</h5>
                                    {movie?.reviews?.map((review, i) => (
                                        <p className="fst-italic text-white" key={i}><span className="fw-bold fst-normal">{review.name}</span>: "{review.text}" <span className="text-white fw-bold pe-2 fst-normal">voto:</span><span className="fw-bold">{review.vote}<span /> <span className="text-danger">/5</span></span></p>
                                    ))}
                                </li>
                                <li>
                                    <MyReviewForm movieId={id}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/Jumbo" className="back btn btn-danger pulsa">Torna Indietro</Link>
                </div>

            </div>

        </div>
    )
}

export default MyMovieDetails