import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHomePage, setIsHomePage] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // useNavigate hook for navigation

    useEffect(() => {
        // Check if the current location is the homepage
        setIsHomePage(location.pathname === '/');
    }, [location]);

    const handleNavbarBrandClick = () => {
        // Redirect the user based on whether they are on the homepage or not
        if (isHomePage) {
            //navigate("/misc"); // Use navigate function for navigation
            navigate("/404");
        } else {
            navigate("/");
        }
    };

    return (
        <>
                       

            <nav sticky="top">
                <div to="/" className="navbar-brand" style={{ color: isHomePage ? 'white' : 'black', cursor: 'pointer' }} onClick={handleNavbarBrandClick}>
                    Adarsh Anand{/* &lt;Adarsh Anand/&gt; */}
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
                        <NavLink to="/Misc" className="text-white">_Chat_</NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience">Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="/project">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nontech">Not so Tech</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bucketlist">Bucket List</NavLink>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1PmZbsKaXMBSWXhjV5ISfczIlbNeamAlm/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    </li>
                    <li>
                         <div className="bhashini-plugin-container"></div>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Header;
