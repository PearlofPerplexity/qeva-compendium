import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md sticky-top">
            <div className="container-fluid mx-2">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-navbar" aria-controls="toggle-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="uil-bars text-white"></i>
                    </button>
                    <Link className="navbar-brand p-3" to="/">Qeṽa Compendium</Link>
                </div>
                <div className="collapse navbar-collapse" id="toggle-navbar">
                    <ul className="navbar-nav mx-3 d-block d-md-none text-white">
                        <li className="nav-item">
                            <i className="uil-comment-info"></i>
                            <Link to='/about'>The Basics</Link>
                        </li>
                        <li className="nav-item">
                            <i className="uil-diamond"></i>
                            <Link to='/gem-overview'>Gemstones</Link>
                        </li>
                        <li className="nav-item">
                            <i className="uil-wind"></i>
                            <Link to='/spiritual-realities'>Divination</Link>
                        </li>
                        <li className="nav-item">
                            <i className="uil-users-alt"></i>
                            <Link to='/elves'>Races</Link>
                        </li>
                        <li className="nav-item">
                            <i className="uil-users-alt"></i>
                            <Link to='/orcs'>Dark Races</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;