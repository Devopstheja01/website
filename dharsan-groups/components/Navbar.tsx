'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { useCart } from '@/lib/CartContext';
import AuthModal from './AuthModal';

export default function Navbar() {
    const { user, login, logout } = useCart();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="DharsanGroups Logo"
                        width={60}
                        height={60}
                        className={styles.logoImage}
                    />
                    <span className={styles.logoText}>DharsanGroups</span>
                </Link>

                <div className={styles.links}>
                    <Link href="/shop/men" className={styles.link}>Men</Link>
                    <Link href="/shop/women" className={styles.link}>Women</Link>
                    <Link href="/tailoring" className={styles.link}>Tailoring</Link>
                </div>

                <div className={styles.actions}>
                    <Link href="/cart" className={styles.cartBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span>Cart</span>
                    </Link>

                    {user ? (
                        <div className={styles.userMenu}>
                            <span className={styles.userPhone}>{user.mobile}</span>
                            <button onClick={logout} className={styles.logoutBtn}>Logout</button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsAuthModalOpen(true)}
                            className={styles.loginBtn}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                onLogin={(mobile) => {
                    login(mobile);
                    setIsAuthModalOpen(false);
                }}
            />
        </nav>
    );
}
