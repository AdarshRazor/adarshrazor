import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/Header.css'

const NavBlog = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHomePage, setIsHomePage] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // useNavigate hook for navigation

    useEffect(() => {
        // Check if the current location is the homepage
        setIsHomePage(location.pathname === '/');
    }, [location]);

    const handleNavbarBrandClick = () => {
        navigate('/blog'); // Navigate to the homepage when the brand is clicked
      };


    return (
        <>
            <nav sticky="top">
                <div to="/" className="navbar-brand" style={{ color: isHomePage ? 'white' : 'black', cursor: 'pointer' }} onClick={handleNavbarBrandClick}>
                    Blog.Div {/* &lt;Adarsh Anand/&gt; */}
                </div>
                <div className='menu' onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? 'open' : ''}>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Portfolio</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default NavBlog;

/*
Implement a search box

*/