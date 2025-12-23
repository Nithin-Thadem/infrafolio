import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fully Automated CI/CD Pipeline",
    description: "Implemented a complete CI/CD pipeline using GitHub Actions, Docker, and Kubernetes with automated testing, security scanning, and multi-environment deployments.",
    image: "/projects/project1.png",
    tags: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "Trivy"],
    demoUrl: "https://github.com/Nithin-Thadem/nithin-thadem-portfolio/actions",
    githubUrl: "https://github.com/Nithin-Thadem/nithin-thadem-portfolio",
  },
  {
    id: 2,
    title: "Infrastructure as Code with Terraform",
    description:
      "Designed and deployed a complete cloud infrastructure using Terraform modules, including VPC, EKS cluster, security groups, and automated scaling with monitoring.",
    image: "/projects/project2.png",
    tags: ["Terraform", "AWS", "EKS", "VPC", "Monitoring"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nithin-Thadem/nithin-thadem-portfolio/tree/main/terraform",
  },
  {
    id: 3,
    title: "Containerized Portfolio Application",
    description:
      "Created a production-ready containerized application with multi-stage Docker builds, nginx optimization, security hardening, and health checks for reliable deployment.",
    image: "/projects/project3.png",
    tags: ["Docker", "Nginx", "React", "Security", "Health Checks"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nithin-Thadem/nithin-thadem-portfolio/blob/main/Dockerfile",
  },
  {
    id: 4,
    title: "Kubernetes Deployment Strategy",
    description:
      "Implemented blue-green deployment with Kubernetes, including rolling updates, health checks, resource limits, auto-scaling, and monitoring integration.",
    image: "/projects/project1.png",
    tags: ["Kubernetes", "Helm", "ArgoCD", "Monitoring", "Auto-scaling"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nithin-Thadem/nithin-thadem-portfolio/tree/main/k8s",
  },
  {
    id: 5,
    title: "DevOps Security & Compliance",
    description:
      "Integrated security scanning throughout the CI/CD pipeline with Trivy vulnerability scanning, SonarQube code analysis, and OWASP security best practices.",
    image: "/projects/project2.png",
    tags: ["Security", "Trivy", "SonarQube", "OWASP", "Compliance"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nithin-Thadem/nithin-thadem-portfolio/blob/main/.github/workflows/ci-cd.yml",
  },
  {
    id: 6,
    title: "Monitoring & Observability Stack",
    description:
      "Deployed comprehensive monitoring solution with Prometheus metrics collection, Grafana dashboards, alerting, and log aggregation for production visibility.",
    image: "/projects/project3.png",
    tags: ["Prometheus", "Grafana", "Alerting", "ELK Stack", "Dashboards"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary"> DevOps</span> Projects
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real implementations showcasing my DevOps philosophy: automate everything, 
          document always, and keep it reliable. Each project demonstrates production-grade 
          infrastructure automation and deployment strategies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
{project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
<a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Nithin-Thadem"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
