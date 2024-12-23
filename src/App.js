import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Homepage from './components/Homepage/Homepage';
import Reservations from './components/Reservations/Reservations';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/reservations" element={<Reservations />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
