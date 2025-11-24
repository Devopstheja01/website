'use client';

import { useEffect } from 'react';
import { useAdmin } from '@/lib/AdminContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function AdminDashboard() {
    const { isAdminLoggedIn, adminLogout } = useAdmin();
    const router = useRouter();

    useEffect(() => {
        if (!isAdminLoggedIn) {
            router.push('/admin/login');
        }
    }, [isAdminLoggedIn, router]);

    if (!isAdminLoggedIn) return null;

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.dashboard}>
                <header className={styles.header}>
                    <h1>Admin Dashboard</h1>
                    <button onClick={adminLogout} className={styles.logoutBtn}>Logout</button>
                </header>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>Recent Orders</h2>
                        <div className={styles.stat}>12</div>
                        <p>Pending processing</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Total Revenue</h2>
                        <div className={styles.stat}>₹45,000</div>
                        <p>This month</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Active Users</h2>
                        <div className={styles.stat}>89</div>
                        <p>Currently online</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Inventory Alert</h2>
                        <div className={styles.stat}>3</div>
                        <p>Items low on stock</p>
                    </div>
                </div>

                <section className={styles.section}>
                    <h2>Quick Actions</h2>
                    <div className={styles.actions}>
                        <button className={styles.actionBtn}>Add New Product</button>
                        <button className={styles.actionBtn}>Manage Inventory</button>
                        <button className={styles.actionBtn}>View Customer Requests</button>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
