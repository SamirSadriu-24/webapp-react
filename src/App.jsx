import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyJumbo from './components/MyJumbo';
import MyHome from './components/MyHome';
import MyMovieDetails from './components/MyMovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MyHome />} /> 
        <Route path="/Jumbo" element={ <MyJumbo />} /> 
        <Route path="/details/:id" element={ <MyMovieDetails />} /> 
      </Routes>
    </Router>
  )
}

export default App
