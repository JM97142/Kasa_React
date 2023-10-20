import Logo from '../../assets/logo.svg';

function Header() {
    return (
        <div className="footer">
            <header className="kasa-footer">
                <img src={Logo} className="logo-footer" alt="logo" />
                <div className='copyright'>
                    <h1>@ 2020 Kasa. All rights reserved</h1>
                </div>
            </header>
        </div>
    );
}

export default Header