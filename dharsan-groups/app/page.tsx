import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>
                        Premium Tailoring & <br />
                        <span className={styles.heroAccent}>Exquisite Fashion</span>
                    </h1>
                    <p className={styles.heroText}>
                        Discover our exclusive collection of men's and women's wear, or experience the luxury of custom tailoring.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/shop/men" className="btn btn-primary">Shop Men</Link>
                        <Link href="/shop/women" className="btn btn-secondary">Shop Women</Link>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section container">
                <h2 className={styles.sectionTitle}>Our Collections</h2>
                <div className="grid grid-cols-2">
                    <div className={styles.categoryCard}>
                        <div className={styles.categoryImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=800)' }}></div>
                        <div className={styles.categoryContent}>
                            <h3>Men's Collection</h3>
                            <p>Shirts, Pants, & Custom Suits</p>
                            <Link href="/shop/men" className={styles.linkArrow}>Explore &rarr;</Link>
                        </div>
                    </div>
                    <div className={styles.categoryCard}>
                        <div className={styles.categoryImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589810635657-232948472d98?auto=format&fit=crop&q=80&w=800)' }}></div>
                        <div className={styles.categoryContent}>
                            <h3>Women's Collection</h3>
                            <p>Sarees, Dresses, & Innerwear</p>
                            <Link href="/shop/women" className={styles.linkArrow}>Explore &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tailoring Promo */}
            <section className={styles.tailoringSection}>
                <div className="container">
                    <div className={styles.tailoringContent}>
                        <h2>Custom Tailoring Services</h2>
                        <p>Perfect fit, guaranteed. Book an appointment or find a partner tailor near you.</p>
                        <Link href="/tailoring" className="btn btn-primary">Book Appointment</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
