import { products } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

export default function ShopCategory({ params }: { params: { category: string } }) {
    const category = params.category;

    if (category !== 'men' && category !== 'women') {
        notFound();
    }

    const categoryProducts = products.filter(p => p.category === category);

    return (
        <main className={styles.main}>
            <Navbar />

            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>
                        {category === 'men' ? "Men's Collection" : "Women's Collection"}
                    </h1>
                    <p className={styles.subtitle}>
                        {category === 'men'
                            ? "Premium shirts, pants, and tailored suits for the modern gentleman."
                            : "Elegant sarees, dresses, and ethnic wear for every occasion."}
                    </p>
                </div>
            </header>

            <section className={`container ${styles.productGrid}`}>
                {categoryProducts.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <div className={styles.imageContainer}>
                            <img src={product.image} alt={product.name} className={styles.image} />
                            {!product.inStock && (
                                <span className={styles.outOfStockBadge}>Out of Stock</span>
                            )}
                        </div>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>₹{product.price.toLocaleString('en-IN')}</p>
                            <button
                                className={`btn ${product.inStock ? 'btn-primary' : 'btn-outline'}`}
                                disabled={!product.inStock}
                            >
                                {product.inStock ? 'Add to Cart' : 'Notify Me'}
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </main>
    );
}
