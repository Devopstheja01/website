'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/CartContext';
import Link from 'next/link';
import styles from './page.module.css';

export default function CartPage() {
    const { items, removeFromCart, total } = useCart();

    return (
        <main className={styles.main}>
            <Navbar />

            <div className="container section">
                <h1 className={styles.title}>Shopping Cart</h1>

                {items.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p>Your cart is empty.</p>
                        <Link href="/" className="btn btn-primary">Continue Shopping</Link>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        <div className={styles.itemsList}>
                            {items.map(item => (
                                <div key={item.id} className={styles.item}>
                                    <img src={item.image} alt={item.name} className={styles.image} />
                                    <div className={styles.details}>
                                        <h3>{item.name}</h3>
                                        <p className={styles.price}>₹{item.price} x {item.quantity}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className={styles.removeBtn}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className={styles.summary}>
                            <h2>Order Summary</h2>
                            <div className={styles.row}>
                                <span>Subtotal</span>
                                <span>₹{total}</span>
                            </div>
                            <div className={styles.row}>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className={`${styles.row} ${styles.total}`}>
                                <span>Total</span>
                                <span>₹{total}</span>
                            </div>
                            <Link href="/checkout" className="btn btn-primary" style={{ width: '100%' }}>
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
