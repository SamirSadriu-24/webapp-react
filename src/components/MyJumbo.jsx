import { Link } from "react-router"
import MyMovieCard from "./MyMovieCard"
import axios from 'axios';
import { useState, useEffect } from 'react';

const MyJumbo = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/movies')
            .then(res => {
                setMovies(res.data)
            })
            .catch(err => {
                console.error('ERRORE:', err);
            });
    }, []);


    return (
        <div className="d-flex container p-4 gap-2 flex-wrap justify-content-center min-vh-100 flex-column comparsa">
            <h1 className="text-white">Questi sono i tuoi film</h1>
            <div className="d-flex gap-5">
                {movies.map(movie => (
                    <MyMovieCard key={movie.id} movie= {movie} />
                ))}
            </div>
            <Link to="/" className="btn btn-danger mt-5 pulsa">Vai alla homepage</Link>
        </div>

    )
}

export default MyJumbo