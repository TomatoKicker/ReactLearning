import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Game from './pages/tictactoe/tictactoe';
import Project1 from './pages/reactjs-the-complete-course-for-beginners/Project1';
import CalculatorPage from './pages/calculator/CalculatorPage';
import WeatherPage from './pages/Weather/WeatherPage';


function App() {
    return (
        <div className='container'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tic-tac-toe' element={<Game />} />
                    <Route path='/project1' element={<Project1 />} />
                    <Route path='/calculator' element={<CalculatorPage />} />
                    <Route path='/weather' element={<WeatherPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
