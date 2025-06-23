import React from 'react';
import myImage from './myimage.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Image + Card Section */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card shadow" style={{ width: "100%" }}>
                        <img src={myImage} className="card-img-top" alt="Profile" />
                        <div className="card-body">
                            <h5 className="card-title">Rajbir Singh</h5>
                            <p className="card-text">
                                I'm deeply passionate about full stack development, building dynamic and responsive web applications from front to back. I'm also learning machine learning to broaden my technical capabilities and stay at the cutting edge of technology.
                            </p>
                            <Link to="/projects" className="btn btn-outline-info">View My Projects</Link>
                        </div>
                    </div>
                </div>

                {/* Heading Section */}
                <div className="col-lg-8 col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
                    <div>
                        <h1 style={{
                            fontSize: "2rem",
                            fontWeight: "700",
                            color: "#0d6efd",
                            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                            letterSpacing: "1.5px",
                            lineHeight: "1.4",
                            marginBottom: "40px"
                        }}>
                            Welcome to My Digital Playground —<br />
                            Crafting Code, Building Ideas,<br />
                            Exploring Intelligence.
                        </h1>
                    </div>

                    {/* Links Section */}
                    <div className="d-grid gap-3 mt-4">
                        <Link to="/projects" className="btn btn-primary btn-lg" type="button">Explore My Projects</Link>
                        <Link to="/skills" className="btn btn-primary btn-lg" type="button">My Tech Stack</Link>
                        <Link to="/about" className="btn btn-primary btn-lg" type="button">Know Me Better</Link>
                        <Link to="/contact" className="btn btn-primary btn-lg" type="button">Get in Touch</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;



