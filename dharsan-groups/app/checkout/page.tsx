'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/CartContext';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const { total, clearCart } = useCart();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        clearCart();
        router.push('/account?order=success');
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <div className="container section">
                <div className={styles.checkoutContainer}>
                    <h1 className={styles.title}>Secure Checkout</h1>

                    <div className={styles.amountDisplay}>
                        <span>Total Amount to Pay:</span>
                        <span className={styles.amount}>₹{total}</span>
                    </div>

                    <form onSubmit={handlePayment} className={styles.form}>
                        <div className={styles.section}>
                            <h2>Shipping Address</h2>
                            <input type="text" placeholder="Full Name" required className={styles.input} />
                            <input type="text" placeholder="Street Address" required className={styles.input} />
                            <div className={styles.row}>
                                <input type="text" placeholder="City" required className={styles.input} />
                                <input type="text" placeholder="Pincode" required className={styles.input} />
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2>Payment Details</h2>
                            <div className={styles.cardMock}>
                                <div className={styles.cardHeader}>
                                    <span>Credit Card</span>
                                    <svg width="30" height="20" viewBox="0 0 30 20" fill="#ccc"><rect width="30" height="20" rx="2" /></svg>
                                </div>
                                <input type="text" placeholder="Card Number" className={styles.cardInput} maxLength={16} />
                                <div className={styles.cardRow}>
                                    <input type="text" placeholder="MM/YY" className={styles.cardInput} maxLength={5} />
                                    <input type="text" placeholder="CVC" className={styles.cardInput} maxLength={3} />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary ${styles.payBtn}`}
                            disabled={isProcessing}
                        >
                            {isProcessing ? 'Processing Payment...' : `Pay ₹${total}`}
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
