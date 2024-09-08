import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
    const pathname = usePathname(); // Lấy đường dẫn hiện tại

    return (
        <nav>
            <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
                <li>
                    <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link>
                </li>
                <li>
                    <Link href="/login" className={pathname === '/login' ? styles.active : ''}>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
