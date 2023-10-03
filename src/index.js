import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/index'
import About from './components/pages/About/about'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/about" element={< About />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
