import { useState } from "react";
import axios from "axios";

const MyReviewForm = ({ movieId, onReviewAdded  }) => {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [vote, setVote] = useState("");
    const [text, setText] = useState("");
    const [message, setMessage] = useState("")

    const gestisciInvio = (e) => {
        e.preventDefault();
        const review = { name, vote: Number(vote), text };

        axios.post(`http://localhost:3000/movies/${movieId}`, review, {
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                console.log(response.data)
                setMessage("Recensione inviata!")

                setName("");
                setVote("");
                setText("");
                if (onReviewAdded) onReviewAdded();
            })

            .catch((error) => {
                console.error(error);
                setMessage("Errore nell'invio della review.");
            });
    };

    return (
        <>
            <button className="btn btn-danger text-white" onClick={() => setOpen(!open)}> LASCIA LA TUA RECENSIONE</button>
            <form className={`collapse mt-2 ${open ? "show" : ""}`}
                onSubmit={gestisciInvio}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="form-control mb-2"
                    type="number"
                    placeholder="Voto"
                    value={vote}
                    onChange={(e) => setVote(e.target.value)}
                    min={1}
                    max={5}
                />
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Recensione"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="btn btn-danger" type="submit">Invia!</button>
            </form>
        </>
    )
}

export default MyReviewForm