import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHome from './components/MyHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MyHome />} />
      </Routes>
    </Router>
  )
}

export default App
