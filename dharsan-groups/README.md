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
    - **No separate container required**: The admin portal is built directly into the main application.
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

### Cloud Deployment (Oracle Linux 9 with Podman)

This application is optimized for Oracle Linux 9 (OL9) using **Podman**.

#### 1. Prerequisites
Ensure Podman and Git are installed on your OL9 instance:
```bash
sudo dnf install -y podman git
```

#### 2. Firewall Configuration
Allow traffic on port 3000:
```bash
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload
```

#### 3. Build & Run with Podman

1. **Build the image**:
   ```bash
   podman build -t dharsan-groups .
   ```

2. **Run the container**:
   ```bash
   podman run -d -p 3000:3000 --name dharsan-app dharsan-groups
   ```

3. **Verify Deployment**:
   Access the application at `http://<YOUR_SERVER_IP>:3000`.

#### 4. Managing the App
- View logs: `podman logs -f dharsan-app`
- Stop app: `podman stop dharsan-app`
- Remove app: `podman rm dharsan-app`

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
