import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import { AdminProvider } from "@/lib/AdminContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DharsanGroups | Premium Tailoring & Clothing",
    description: "Custom tailoring and premium clothing for men and women.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <CartProvider>
                    <AdminProvider>
                        {children}
                    </AdminProvider>
                </CartProvider>
            </body>
        </html>
    );
}
