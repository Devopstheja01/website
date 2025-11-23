import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Dharsan<span className={styles.logoAccent}>Groups</span>
                </Link>

                <div className={styles.links}>
                    <Link href="/shop/men" className={styles.link}>Men</Link>
                    <Link href="/shop/women" className={styles.link}>Women</Link>
                    <Link href="/tailoring" className={styles.link}>Tailoring</Link>
                    <Link href="/partners" className={styles.link}>Partners</Link>
                </div>

                <div className={styles.actions}>
                    <Link href="/search" className={styles.iconBtn} aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </Link>
                    <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                    </Link>
                    <Link href="/account" className={styles.btnAccount}>
                        Account
                    </Link>
                </div>
            </div>
        </nav>
    );
}
