export interface Product {
    id: string;
    name: string;
    price: number;
    category: 'men' | 'women';
    subcategory: string;
    image: string;
    inStock: boolean;
}

export const products: Product[] = [
    {
        id: 'm1',
        name: 'Premium Linen Shirt',
        price: 2499,
        category: 'men',
        subcategory: 'shirts',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
        inStock: true,
    },
    {
        id: 'm2',
        name: 'Tailored Chinos',
        price: 1999,
        category: 'men',
        subcategory: 'pants',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
        inStock: true,
    },
    {
        id: 'w1',
        name: 'Silk Saree - Kanchipuram',
        price: 12999,
        category: 'women',
        subcategory: 'sarees',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
        inStock: true,
    },
    {
        id: 'w2',
        name: 'Designer Anarkali Suit',
        price: 5999,
        category: 'women',
        subcategory: 'dresses',
        image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800',
        inStock: false, // Out of stock example
    },
];
