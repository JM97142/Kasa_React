import { Link } from 'react-router-dom';

import Logo from '../Assets/logo.svg';

function Header() {
    return (
        <div className="header">
            <header className="kasa-header">
                <img src={Logo} className="kasa-logo" alt="logo" />
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