'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { useState } from 'react';

export default function TailoringPage() {
    const [visitType, setVisitType] = useState<'store' | 'home'>('store');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Custom Tailoring Services</h1>
                    <p className={styles.subtitle}>
                        Experience the perfect fit with our master tailors.
                    </p>
                </div>
            </header>

            <section className={`container ${styles.content}`}>
                <div className={styles.grid}>
                    <div className={styles.formCard}>
                        <h2>Book an Appointment</h2>

                        {isSubmitted ? (
                            <div className={styles.successMessage}>
                                <h3>Request Received!</h3>
                                <p>Our agent will contact you shortly to confirm.</p>
                                {visitType === 'store' && (
                                    <div className={styles.mapLink}>
                                        <p>Visit our store at:</p>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Dharsan+Groups+Store"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline"
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>
                                )}
                                {visitType === 'home' && (
                                    <p>We will visit your home within 5 days.</p>
                                )}
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className={styles.resetBtn}
                                >
                                    Book Another
                                </button>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label>Visit Type</label>
                                    <div className={styles.radioGroup}>
                                        <label className={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="visitType"
                                                value="store"
                                                checked={visitType === 'store'}
                                                onChange={() => setVisitType('store')}
                                            />
                                            <span>Store Visit</span>
                                        </label>
                                        <label className={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="visitType"
                                                value="home"
                                                checked={visitType === 'home'}
                                                onChange={() => setVisitType('home')}
                                            />
                                            <span>Home Visit (within 5 days)</span>
                                        </label>
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" className={styles.input} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="+91 98765 43210" className={styles.input} required />
                                </div>

                                {visitType === 'home' && (
                                    <div className={styles.formGroup}>
                                        <label htmlFor="address">Home Address</label>
                                        <textarea
                                            id="address"
                                            placeholder="Enter your full address with landmark"
                                            className={styles.textarea}
                                            rows={3}
                                            required
                                        ></textarea>
                                    </div>
                                )}

                                <div className={styles.formGroup}>
                                    <label htmlFor="service">Service Type</label>
                                    <select id="service" className={styles.input}>
                                        <option>Custom Suit</option>
                                        <option>Shirt/Pant Alteration</option>
                                        <option>Saree Blouse Stitching</option>
                                        <option>Dress Design</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="date">Preferred Date</label>
                                    <input type="date" id="date" className={styles.input} required />
                                </div>
                                <button type="submit" className="btn btn-primary">Request Appointment</button>
                            </form>
                        )}
                    </div>

                    <div className={styles.infoCard}>
                        <h2>Why Choose Us?</h2>
                        <ul className={styles.featuresList}>
                            <li>✓ Expert Master Tailors</li>
                            <li>✓ Premium Fabric Selection</li>
                            <li>✓ Doorstep Measurement Service</li>
                            <li>✓ Perfect Fit Guarantee</li>
                        </ul>

                        <div className={styles.partnerSection}>
                            <h3>Are you a Tailor?</h3>
                            <p>Join our partner network and grow your business.</p>
                            <a href="/partners" className="btn btn-outline">Join as Partner</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
