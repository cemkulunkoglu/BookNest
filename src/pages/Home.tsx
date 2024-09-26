import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import BookChart from '../components/BookChart';
import SalesChart from '../components/SalesChart';

const Home: React.FC = () => {
    return (
        <div>
            <div className="main-panel">
                <Navbar />
                <div className="container my-5">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Kitap Türleri</h4>
                                        </div>
                                        <div className="card-body">
                                            <BookChart />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">2023 En Çok Değerlendirilenler</h4>
                                        </div>
                                        <div className="card-body">
                                            <SalesChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container-fluid">
                        <nav className="pull-left">
                            <ul>
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Company
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <p className="copyright pull-right">
                            &copy; <script>document.write(new Date().getFullYear())</script> <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;
