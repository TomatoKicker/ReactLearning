import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Game from './pages/tictactoe/tictactoe';
import Project1 from './pages/reactjs-the-complete-course-for-beginners/Project1';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tic-tac-toe' element={<Game />} />
                <Route path='/project1' element={<Project1 />} />
            </Routes>
        </Router>
    );
}

export default App;
