import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const [isOpen, setisOpen] = useState(false);
    const sideRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState("");
    const openNav = () => {
        sideRef.current.classList.toggle("mobile");
        setisOpen(!isOpen);
    };
    const closeNav = () => {
        if (isOpen) {
            openNav();
        }
    };
    const goHome = () => {
        navigate("/");
    };
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    return (
        <>
            {/*Side Bar Started */}
            <aside ref={sideRef} className="side-bar">
                <h3>Main Menu</h3>
                <div className="side-links">
                    <NavLink className={path == "/" ? "active" : ""} to="/">
                        <i className="bx bx-customize"></i>
                        <span>Dashboard</span>
                    </NavLink>
                     <NavLink
                        className={path == "/profile" ? "active" : ""}
                        to="/profile"
                    >
                        <i className="bx bx-user-circle"></i>
                        <span>Profile</span>
                    </NavLink>
                     <NavLink
                        className={path == "/notification" ? "active" : ""}
                        to="/notification"
                    >
                        <i className="bx bx-bell"></i>
                        <span>Notification</span>
                    </NavLink>
                    <NavLink
                        className={path == "/about" ? "active" : ""}
                        to="/about"
                    >
                        <i className="bx bx-bar-chart"></i>
                        <span>Chart</span>
                    </NavLink>
                    <NavLink
                        className={path == "/contact" ? "active" : ""}
                        to="/contact"
                    >
                        <i className="bx bx-time"></i>
                        <span>Manage Site</span>
                    </NavLink>
                    <NavLink
                        className={path == "/contact" ? "active" : ""}
                        to="/contact"
                    >
                        <i className="bx bx-code-alt"></i>
                        <span>Edit UI</span>
                    </NavLink>
                    <NavLink
                        className={path == "/contact" ? "active" : ""}
                        to="/contact"
                    >
                        <i className="ri ri-file-add-line"></i>
                        <span>Add Page</span>
                    </NavLink>
                    <NavLink
                        className={path == "/skills" ? "active" : ""}
                        to="/skills"
                    >
                        <i className="bx bx-slider"></i>
                        <span>Customize Site</span>
                    </NavLink>
                    <NavLink
                        className={path == "/projects" ? "active" : ""}
                        to="/projects"
                    >
                        <i className="bx bx-cog"></i>
                        <span>Settings</span>
                    </NavLink>
                    <NavLink
                        className={path == "/logout" ? "active" : ""}
                        to="/logout"
                    >
                        <i className="bx bx-log-out-circle"></i>
                        <span>Logout</span>
                    </NavLink>
                </div>
            </aside>
            {/* Header Started */}
            <header>
                <h3 onClick={goHome}>Admin Dashboard</h3>
                <div className="links">
                    <NavLink to="/">
                        {" "}
                        <i className="bx bx-search"></i>
                    </NavLink>
                    <NavLink to="/">
                        {" "}
                        <i className="bx bx-bell"></i>
                    </NavLink>
                    <NavLink to="/">
                        {" "}
                        <i className="bx bx-user-circle"></i>
                    </NavLink>
                </div>
                <div onClick={openNav} className="nav-btn">
                    <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
                </div>
            </header>
        </>
    );
};

export default Header;
