import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="posts">Posts</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;