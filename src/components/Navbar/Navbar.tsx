import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg " color-on-scroll="500">
        <div className="container-fluid">
            <a className="navbar-brand" href="#pablo">Ana Sayfa</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between mx-5" id="navigation">
                <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nc-icon nc-zoom-split"></i>
                            <span className="d-lg-block">&nbsp;Search</span>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="dropdown nav-item">
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                            <i className="nc-icon nc-planet"></i>
                            <span className="notification">5</span>
                            <span className="d-lg-none">Notification</span>
                        </a>
                        <ul className="dropdown-menu">
                            <a className="dropdown-item" href="#">Notification 1</a>
                            <a className="dropdown-item" href="#">Notification 2</a>
                            <a className="dropdown-item" href="#">Notification 3</a>
                            <a className="dropdown-item" href="#">Notification 4</a>
                            <a className="dropdown-item" href="#">Another notification</a>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pablo">
                            <span className="no-icon">Giriş Yap</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
