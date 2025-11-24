'use client';

import Link from 'next/link';
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
                    DharsanGroups
                </Link>

                <div className={styles.links}>
                    <Link href="/shop/men" className={styles.link}>Men</Link>
                    <Link href="/shop/women" className={styles.link}>Women</Link>
                    <Link href="/tailoring" className={styles.link}>Tailoring</Link>
                </div>

                <div className={styles.actions}>
                    <Link href="/cart" className={styles.cartBtn}>
                        Cart
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
