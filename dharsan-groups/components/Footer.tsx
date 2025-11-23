import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3 className={styles.heading}>DharsanGroups</h3>
                        <p className={styles.text}>Premium tailoring and fashion for the modern era.</p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.subheading}>Shop</h4>
                        <Link href="/shop/men" className={styles.link}>Men</Link>
                        <Link href="/shop/women" className={styles.link}>Women</Link>
                        <Link href="/tailoring" className={styles.link}>Tailoring Services</Link>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.subheading}>Support</h4>
                        <Link href="/account" className={styles.link}>My Account</Link>
                        <Link href="/partners" className={styles.link}>Partner with Us</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.subheading}>Visit Us</h4>
                        <p className={styles.text}>Experience our premium tailoring in person.</p>
                        <a
                            href="https://share.google/hmLDREZdtsrmx3r5y"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mapLink}
                        >
                            View on Google Maps &rarr;
                        </a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} DharsanGroups. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
