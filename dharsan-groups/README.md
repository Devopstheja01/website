# DharsanGroups E-commerce Platform

A premium e-commerce solution for DharsanGroups, featuring custom tailoring services, a dynamic product catalog, and an integrated admin portal.

## Features

- **Premium UI/UX**: Modern, responsive design with smooth transitions and a focus on aesthetics.
- **Product Catalog**: 
    - Separate sections for Men and Women.
    - Advanced filtering by sub-category (Shirts, Pants, Sarees, etc.) and price range.
    - Pagination for large product lists.
- **Shopping Cart**: 
    - Real-time cart management.
    - **User Authentication**: Users must log in (via mock mobile/OTP) to add items to the cart.
- **Custom Tailoring**: 
    - Appointment booking system.
    - Choice between **Store Visit** (with Google Maps integration) and **Home Visit** (with address collection).
- **Integrated Admin Portal**:
    - Secure login with Mock Captcha and OTP.
    - Dashboard for managing orders and inventory (mock).
    - Accessible at `/admin/login`.
- **Mock Payment Gateway**: Simulated payment flow for testing.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules (Vanilla CSS)
- **State Management**: React Context (CartContext, AdminContext)
- **Deployment**: Docker (Single Container)

## Getting Started

### Prerequisites

- Node.js 18+ (for local development)
- Docker (for containerized deployment)

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Deployment (OL9 Compatible)

This application is designed to run in a single container, making it fully compatible with Oracle Linux 9 (OL9) cloud instances.

1. Build the image:
   ```bash
   docker build -t dharsan-groups .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 dharsan-groups
   ```

## Project Structure

- `app/`: Next.js App Router pages and layouts.
    - `shop/`: Product listing pages.
    - `cart/`: Shopping cart page.
    - `tailoring/`: Appointment booking page.
    - `admin/`: Admin portal (Login & Dashboard).
- `components/`: Reusable UI components (Navbar, Footer, FilterSidebar, AuthModal).
- `lib/`: Utility functions and Context providers (data.ts, CartContext.tsx, AdminContext.tsx).
- `public/`: Static assets.

## Authentication (Mock)

- **User Login**: Enter any mobile number -> OTP is `1234`.
- **Admin Login**: 
    - Username: `admin`
    - Mobile: Any valid number
    - OTP: `1234`
