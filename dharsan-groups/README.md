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

## ☁️ Cloud Deployment Guide (Oracle Linux 9 / RHEL)

To deploy this on an Oracle Linux 9 (OL9) or RHEL instance using **Podman**:

### Step 1: Prepare your Cloud Instance
1.  SSH into your cloud server.
2.  Install Podman, Podman Compose, and Git:
    ```bash
    sudo dnf update -y
    sudo dnf install -y podman podman-compose git
    ```
3.  Enable the Podman socket (optional, but good for some tools):
    ```bash
    sudo systemctl enable --now podman.socket
    ```

### Step 2: Configure Firewall
Oracle Linux 9 uses `firewalld` by default. You need to allow traffic on port 3000.
```bash
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload
```

### Step 3: Deploy the Code
1.  Clone your repository on the server:
    ```bash
    git clone <your-repo-url>
    cd dharsan-groups
    ```
2.  Start the application using Podman Compose:
    ```bash
    # Podman Compose works similarly to Docker Compose
    podman-compose up -d --build
    ```

### Step 4: Access the Site
- Open your browser and visit `http://<your-server-ip>:3000`.




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
