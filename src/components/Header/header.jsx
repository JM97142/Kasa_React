import { Link } from 'react-router-dom';
import '../Style/header.css';

function Header() {
    return (
        <div className="header">
            <header className="kasa-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div className='nav'>
                    <nav>
                        <Link to="/">Accueil</Link>
                        <Link to="/about">A propos</Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header