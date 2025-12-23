# Nithin Thadem - DevOps/Cloud Engineer Portfolio

<div align="center">
  <br />
  <img src="./banner.png" alt="Nithin Thadem Portfolio Website">
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/-Lucide%20Icons-FD4D4D?style=for-the-badge&logo=lucide" alt="Lucide Icons" />
    <img src="https://img.shields.io/badge/-Google%20Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" alt="Google Cloud" />
    <img src="https://img.shields.io/badge/-Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
  </div>
  <h3 align="center">Professional Portfolio Website for DevOps/Cloud Engineer</h3>
  <div align="center">
    <a href="https://thademinfra.tech" target="_blank"><b>Live Demo</b></a> •
    <a href="https://www.linkedin.com/in/thadem-n-790bb520a" target="_blank"><b>LinkedIn</b></a>
  </div>
  <br />
</div>

## 📋 Table of Contents

1. [About](#-about)
2. [Tech Stack](#-tech-stack)
3. [Features](#-features)
4. [Project Structure](#-project-structure)
5. [Getting Started](#-getting-started)
6. [Customization](#-customization)
7. [Deployment](#-deployment)
8. [License](#-license)

---

## 👨‍💻 About

A minimalist DevOps engineer portfolio—built with CI/CD, containerized, and deployed via Infrastructure as Code. Showcasing my philosophy: **automate everything, document always, and keep it reliable**.

**🔗 Live Site:** [thademinfra.tech](https://thademinfra.tech)

This portfolio isn't just a static website—it's a complete DevOps demonstration featuring:
- **Automated CI/CD pipeline** with GitHub Actions
- **Containerized architecture** using Docker with security hardening
- **Infrastructure as Code** with Terraform modules
- **Kubernetes deployment** with production-ready configurations
- **Security scanning** and vulnerability detection
- **Monitoring and observability** integration

The entire infrastructure is version-controlled, tested, and deployed automatically, demonstrating production-grade DevOps practices in action.

---

## ⚙️ Tech Stack & DevOps Stack

### Frontend
* **React 18** – Component-based UI development with hooks
* **Vite** – Lightning-fast build tool and development server
* **TailwindCSS 4** – Utility-first CSS for responsive styling
* **Lucide Icons** – Beautiful, consistent icon system

### DevOps & Infrastructure
* **CI/CD** – GitHub Actions with automated testing and deployment
* **Containerization** – Docker with multi-stage builds and security hardening
* **Infrastructure as Code** – Terraform modules for AWS resources
* **Container Orchestration** – Kubernetes with production-ready manifests
* **Security** – Trivy vulnerability scanning, SonarQube code analysis
* **Monitoring** – Prometheus metrics collection and Grafana dashboards
* **Web Server** – Nginx with performance optimization and security headers

### Cloud & Deployment
* **AWS** – EKS, VPC, ALB, Route53 for production infrastructure
* **GitHub Container Registry** – Private Docker image storage
* **Multi-environment** – Staging and production deployments
* **Auto-scaling** – Horizontal pod autoscaling with resource limits

### Development Tools
* **ESLint** – Code quality and consistency
* **PostCSS** – CSS processing and optimization

---

## ⚡️ Features

### 🎨 **Design & UI**
* **Dark/Light Mode Toggle** – Persistent theme preference with smooth transitions
* **Responsive Design** – Mobile-first approach that works on all devices
* **Animated Backgrounds** – Starfield and meteor effects for visual appeal
* **Glassmorphism UI** – Modern frosted glass effects throughout

### 🚀 **DevOps Features**
* **Automated CI/CD Pipeline** – GitHub Actions with testing, building, and deployment
* **Multi-stage Docker Builds** – Optimized container images with security hardening
* **Infrastructure as Code** – Terraform modules for reproducible infrastructure
* **Kubernetes Deployments** – Production-ready with health checks and auto-scaling
* **Security Scanning** – Automated vulnerability detection and code analysis
* **Monitoring Integration** – Ready for Prometheus metrics and Grafana dashboards
* **Environment Management** – Separate staging and production configurations

### 🚀 **Performance**
* **Optimized Build** – Fast loading times with code splitting
* **SEO Friendly** – Proper meta tags and semantic HTML structure
* **Accessibility** – WCAG compliant with keyboard navigation support

### 📱 **Sections**
* **Hero Section** – DevOps-focused introduction with tech stack highlights
* **About Section** – Professional summary and DevOps philosophy
* **DevOps Skills** – Comprehensive DevOps technology stack with proficiency levels
* **DevOps Projects** – Real implementations of CI/CD, IaC, and containerization
* **Infrastructure Status** – Live status dashboard for CI/CD, containers, and security
* **Contact Section** – Professional contact information and links

### ⚡ **Interactive Elements**
* **Smooth Scroll** – Animated page navigation
* **Hover Effects** – Micro-interactions on buttons and cards
* **Toast Notifications** – User-friendly feedback system
* **Mobile Menu** – Collapsible navigation for smaller screens

---

## 📁 Project Structure

```
├── src/                           # React application source
│   ├── components/                # React components
│   │   ├── ui/                   # Reusable UI components
│   │   ├── HeroSection.jsx        # DevOps-focused hero
│   │   ├── SkillsSection.jsx      # DevOps skills showcase
│   │   ├── ProjectsSection.jsx    # DevOps projects showcase
│   │   ├── InfrastructureStatus.jsx # Live infrastructure status
│   │   └── ...
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions
│   └── pages/                     # Page components
├── k8s/                          # Kubernetes manifests
│   ├── staging/                   # Staging environment configs
│   │   ├── deployment.yaml
│   │   └── ingress.yaml
│   └── production/                # Production environment configs
│       ├── deployment.yaml
│       └── ingress.yaml
├── terraform/                     # Infrastructure as Code
│   ├── modules/                   # Reusable Terraform modules
│   │   ├── vpc/                   # VPC and networking
│   │   └── eks/                   # EKS cluster
│   ├── main.tf                    # Main infrastructure
│   └── variables.tf               # Input variables
├── .github/workflows/             # CI/CD pipelines
│   └── ci-cd.yml                  # Complete DevOps pipeline
├── Dockerfile                     # Multi-stage container build
├── nginx.conf                     # Production web server config
└── package.json                   # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nithin-Thadem/nithin-thadem-portfolio.git
   cd nithin-thadem-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🎨 Customization

### Personal Information

Update the following components with your information:

1. **Hero Section** (`src/components/HeroSection.jsx`)
   - Name and professional title
   - Brief introduction text

2. **About Section** (`src/components/AboutSection.jsx`)
   - Professional summary
   - Key expertise areas

3. **Skills Section** (`src/components/SkillsSection.jsx`)
   - Technical skills and proficiency levels
   - Categories and organization

4. **Projects Section** (`src/components/ProjectsSection.jsx`)
   - Work experience and projects
   - Technologies used

5. **Contact Section** (`src/components/ContactSection.jsx`)
   - Contact information
   - Social media links

### Styling

The design uses Tailwind CSS with custom utility classes. To modify colors, spacing, or other design tokens:

1. Edit `tailwind.config.js` for theme configuration
2. Modify `src/index.css` for custom CSS variables
3. Update component classes as needed

### Content

- **Images**: Replace images in `public/` directory
- **Icons**: Lucide icons are used throughout - customize as needed
- **Colors**: Theme colors are defined in CSS variables

---

## 🚀 Deployment

### Prerequisites
- AWS CLI configured
- kubectl installed
- Terraform installed
- Docker installed
- GitHub account with repository access

### 1. Infrastructure Deployment

**Initialize Terraform:**
```bash
cd terraform
terraform init
terraform plan -var-file="environments/production.tfvars"
terraform apply -var-file="environments/production.tfvars"
```

**Configure kubectl:**
```bash
aws eks update-kubeconfig --region <region> --name <cluster-name>
kubectl get nodes
```

### 2. Container Deployment

**Build and Push Docker Image:**
```bash
docker build -t ghcr.io/Nithin-Thadem/nithin-thadem-portfolio:latest .
docker push ghcr.io/Nithin-Thadem/nithin-thadem-portfolio:latest
```

**Deploy to Kubernetes:**
```bash
kubectl apply -f k8s/production/
kubectl get pods -l app=portfolio
kubectl logs -l app=portfolio
```

### 3. Automated CI/CD (Recommended)

The project includes a complete GitHub Actions workflow that:
1. **Tests** code quality and runs linters
2. **Builds** optimized Docker images
3. **Scans** for security vulnerabilities
4. **Deploys** to staging/production automatically
5. **Monitors** deployment health

To enable CI/CD:
1. Fork the repository
2. Configure GitHub secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `GITHUB_TOKEN` (auto-provided)
3. Push to `develop` (staging) or `main` (production)

### 4. Manual Verification

**Check deployment status:**
```bash
kubectl get deployments
kubectl get services
kubectl get ingress
```

**Access application:**
```bash
kubectl port-forward service/portfolio-service 8080:80
# Visit http://localhost:8080
```

### 5. Monitoring & Logs

**View logs:**
```bash
kubectl logs -f deployment/portfolio
kubectl events --field-selector involvedObject.name=portfolio
```

**Monitor resources:**
```bash
kubectl top pods
kubectl describe pod -l app=portfolio
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_GITHUB_USERNAME=yourusername
VITE_LINKEDIN_URL=your-linkedin-profile
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

While this is a personal portfolio, feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📞 Contact

**Nithin Thadem**
- 📧 Email: nitinsinghshahensha@gmail.com
- 💼 LinkedIn: [thadem-n-790bb520a](https://www.linkedin.com/in/thadem-n-790bb520a)
- 🌐 Website: [thademinfra.tech](https://thademinfra.tech)
- 📱 Phone: (+39) 388 353 1895

---

<div align="center">
  <p>Built with ❤️ using React, TailwindCSS, and modern web technologies</p>
  <p>© 2024 Nithin Thadem. All rights reserved.</p>
</div>