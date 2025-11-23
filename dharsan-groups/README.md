# DharsanGroups.com

Premium e-commerce platform for custom tailoring and fashion. Built with Next.js, Vanilla CSS, and Docker.

## Features
- **Premium Design**: Custom CSS variables for a luxury aesthetic.
- **Shop**: Men's and Women's collections with filtering and search.
- **Tailoring**: Appointment booking and partner registration.
- **User Dashboard**: Order tracking and status updates.
- **Admin Portal**: Product management interface.
- **Mock Payment**: Simulated credit card checkout flow.

## Prerequisites
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) & Docker Compose

## 🚀 Quick Start (Local)

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd dharsan-groups
    ```

2.  **Run with Docker** (Recommended)
    ```bash
    docker-compose up --build
    ```
    The app will be available at `http://localhost:3000`.

3.  **Run manually** (Requires Node.js 18+)
    ```bash
    npm install
    npm run dev
    ```

## ☁️ Cloud Deployment Guide

To deploy this on a cloud instance (AWS EC2, DigitalOcean Droplet, Google Compute Engine, etc.):

### Step 1: Prepare your Cloud Instance
1.  SSH into your cloud server.
2.  Install Docker and Git:
    ```bash
    # Ubuntu/Debian example
    sudo apt-get update
    sudo apt-get install docker.io docker-compose git -y
    ```

### Step 2: Deploy the Code
1.  Clone your repository on the server:
    ```bash
    git clone <your-repo-url>
    cd dharsan-groups
    ```
2.  Start the application in detached mode (background):
    ```bash
    sudo docker-compose up -d --build
    ```

### Step 3: Access the Site
- Open your browser and visit `http://<your-server-ip>:3000`.
- **Note**: Ensure your firewall/security group allows traffic on port **3000**.

## 🛠️ Environment Variables
Currently, the app uses mock data. For production with a real database, update `docker-compose.yml` or create a `.env` file with:
```env
DATABASE_URL=postgresql://user:password@host:5432/db_name
```

## Project Structure
- `/app`: Next.js App Router pages.
- `/components`: Reusable UI components.
- `/lib`: Mock data and utility functions.
- `/public`: Static assets.
