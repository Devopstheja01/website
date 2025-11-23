import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function TailoringPage() {
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
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+91 98765 43210" className={styles.input} />
                            </div>
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
                                <input type="date" id="date" className={styles.input} />
                            </div>
                            <button type="submit" className="btn btn-primary">Request Appointment</button>
                        </form>
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
