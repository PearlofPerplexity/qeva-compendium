import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md sticky-top">
            <div className="container-fluid mx-2">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-navbar" aria-controls="toggle-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="uil-bars text-white"></i>
                    </button>
                    <Link className="navbar-brand" to="index.html">Qeṽa Compendium</Link>
                </div>
                <div className="collapse navbar-collapse" id="toggle-navbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                <i data-show="show-side-navigation1" className="uil-bars show-side-btn"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;