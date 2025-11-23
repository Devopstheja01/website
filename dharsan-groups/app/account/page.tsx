'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { useSearchParams } from 'next/navigation';

export default function AccountPage() {
    const searchParams = useSearchParams();
    const orderSuccess = searchParams.get('order') === 'success';

    return (
        <main className={styles.main}>
            <Navbar />

            <div className="container section">
                <h1 className={styles.title}>My Account</h1>

                {orderSuccess && (
                    <div className={styles.successMessage}>
                        <h3>Order Placed Successfully!</h3>
                        <p>Thank you for shopping with DharsanGroups. Your order #DG-{Math.floor(Math.random() * 10000)} has been confirmed.</p>
                    </div>
                )}

                <div className={styles.grid}>
                    <div className={styles.sidebar}>
                        <div className={styles.profileCard}>
                            <div className={styles.avatar}>JD</div>
                            <h3>John Doe</h3>
                            <p>john.doe@example.com</p>
                        </div>
                        <nav className={styles.nav}>
                            <a href="#" className={styles.active}>My Orders</a>
                            <a href="#">Tailoring Requests</a>
                            <a href="#">Addresses</a>
                            <a href="#">Settings</a>
                        </nav>
                    </div>

                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2>Recent Orders</h2>
                            <div className={styles.orderCard}>
                                <div className={styles.orderHeader}>
                                    <span>Order #DG-4521</span>
                                    <span className={styles.status}>Delivered</span>
                                </div>
                                <div className={styles.orderItems}>
                                    <p>1x Premium Linen Shirt</p>
                                    <p>1x Tailored Chinos</p>
                                </div>
                                <div className={styles.orderFooter}>
                                    <span>Total: ₹4,498</span>
                                    <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>View Details</button>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>Tailoring Status</h2>
                            <div className={styles.orderCard}>
                                <div className={styles.orderHeader}>
                                    <span>Request #TR-982</span>
                                    <span className={`${styles.status} ${styles.statusProcessing}`}>In Progress</span>
                                </div>
                                <p>Service: Custom Suit Stitching</p>
                                <p>Expected Completion: 25th Nov</p>
                                <div className={styles.timeline}>
                                    <div className={`${styles.step} ${styles.completed}`}>Measured</div>
                                    <div className={`${styles.step} ${styles.completed}`}>Cutting</div>
                                    <div className={`${styles.step} ${styles.active}`}>Stitching</div>
                                    <div className={styles.step}>Quality Check</div>
                                    <div className={styles.step}>Ready</div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
