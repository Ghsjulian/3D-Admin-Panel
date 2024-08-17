import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    return (
        <aside className="side-bar">
            <h3>Main Menu</h3>
            <div className="side-links">
                <NavLink className={path == "/" ? "active" : ""} to="/">
                    <i className="bx bx-customize"></i>Dashboard
                </NavLink>
                <NavLink
                    className={path == "/about" ? "active" : ""}
                    to="/about"
                >
                    <i className="bx bx-bar-chart"></i>Chart
                </NavLink>
                <NavLink
                    className={path == "/contact" ? "active" : ""}
                    to="/contact"
                >
                    <i className="bx bx-cog"></i>Settings
                </NavLink>
                <NavLink
                    className={path == "/skills" ? "active" : ""}
                    to="/skills"
                >
                    Skills
                </NavLink>
                <NavLink
                    className={path == "/projects" ? "active" : ""}
                    to="/projects"
                >
                     <i className="bx bx-bell"></i>
                </NavLink>
                <NavLink
                    className={path == "/projects" ? "active" : ""}
                    to="/projects"
                >
                    <i className="bx bx-log-out-circle"></i>Logout
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
