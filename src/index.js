// React & Router
import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/pages/Home/'
import About from './components/pages/About/about'
import Error from './components/pages/Error/404'
// Style
import './index.css';

const contenair = document.getElementById('root');
const root = createRoot(contenair);

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
