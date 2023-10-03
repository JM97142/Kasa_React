import { Link } from 'react-router-dom';
import './style/header.css';

function Header() {
    return (
        <div className="header">
            <header className="kasa-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div className='nav'>
                    <nav>
                        <Link to="/">Accueil</Link>
                        <Link to="/about">À propos</Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header