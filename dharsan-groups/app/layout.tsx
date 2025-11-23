import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/lib/CartContext';

export const metadata: Metadata = {
    title: 'DharsanGroups | Premium Tailoring & Clothing',
    description: 'Exclusive men\'s and women\'s fashion, custom tailoring, and partnership network.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <CartProvider>
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}
