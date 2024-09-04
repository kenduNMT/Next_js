import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header style={{ padding: '10px', backgroundColor: '#FF0000', color: '#fff' }}>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/" passHref>
                            <FontAwesomeIcon icon={faHome} style={{ marginRight: '8px' }} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
