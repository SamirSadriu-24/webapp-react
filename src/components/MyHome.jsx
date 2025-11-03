import { Link } from "react-router-dom"

const MyHome =() => {
    return (
        <div className="container d-flex flex-column min-vh-100 min-vw-100"> 
            <h1 className=" comparsa text-danger fw-600">BENVENUTO/BENTORNATO
                
            </h1>
            <p className="comparsa text-white fs-5">
                PRONTO AD ACCEDERE ALLA TUA LISTA DI FILM?  
            </p>
            <Link to="/Jumbo" className="btn btn-danger p-3 comparsa pulsa">Vai ai tuoi film</Link>
        </div>
    )
}

export default MyHome