import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState<string>(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    };

    return (
        <div className="sidebar" data-image="../img/sidebar-5.jpg">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <a href="/" className="simple-text">
                        BookNest
                    </a>
                </div>
                <ul className="nav">
                    <li className={`nav-item ${activeLink === '/home' ? 'active' : ''}`}>
                        <a className="nav-link" href="/" onClick={() => handleLinkClick('/')}>
                            <i className="nc-icon nc-chart-pie-35"></i>
                            <p>Ana Sayfa</p>
                        </a>
                    </li>
                    <li className={`nav-item ${activeLink === '/user' ? 'active' : ''}`}>
                        <a className="nav-link" href="/user" onClick={() => handleLinkClick('/user')}>
                            <i className="nc-icon nc-circle-09"></i>
                            <p>Profil</p>
                        </a>
                    </li>
                    <li className={`nav-item ${activeLink === '/table' ? 'active' : ''}`}>
                        <a className="nav-link" href="/table" onClick={() => handleLinkClick('/table')}>
                            <i className="nc-icon nc-notes"></i>
                            <p>Tablo</p>
                        </a>
                    </li>
                    <li className={`nav-item ${activeLink === '/typography' ? 'active' : ''}`}>
                        <a className="nav-link" href="/typography" onClick={() => handleLinkClick('/typography')}>
                            <i className="nc-icon nc-paper-2"></i>
                            <p>Tipografi</p>
                        </a>
                    </li>
                    <li className={`nav-item ${activeLink === '/notifications' ? 'active' : ''}`}>
                        <a className="nav-link" href="/notifications" onClick={() => handleLinkClick('/notifications')}>
                            <i className="nc-icon nc-bell-55"></i>
                            <p>Bildirimler</p>
                        </a>
                    </li>
                    <li className={`nav-item active active-pro ${activeLink === '/upgrade' ? 'active' : ''}`}>
                        <a className="nav-link active" href="/upgrade" onClick={() => handleLinkClick('/upgrade')}>
                            <i className="nc-icon nc-alien-33"></i>
                            <p>Planını Yükselt</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
