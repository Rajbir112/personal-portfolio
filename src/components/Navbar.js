import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let [active, setactive] = useState("home");

    let handleclick = (e) => {

        setactive(e.target.name);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "home" ? "active" : ""}`} aria-current="page" to="/" name="home" onClick={handleclick}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "projects" ? "active" : ""}`} to="/projects" name="projects" onClick={handleclick} > projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "skills" ? "active" : ""}`} to="/skills" name="skills" onClick={handleclick} >Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "about" ? "active" : ""}`} to="/about" name="about" onClick={handleclick} >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "contact" ? "active" : ""}`} to="/contact" name="contact" onClick={handleclick} >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
