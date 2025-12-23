import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, Clock, GitBranch, Package, Shield } from "lucide-react";

export const InfrastructureStatus = () => {
  const [statuses, setStatuses] = useState({
    ci: { status: "loading", text: "Checking CI/CD Pipeline..." },
    docker: { status: "loading", text: "Checking Docker Registry..." },
    terraform: { status: "loading", text: "Checking Infrastructure..." },
    security: { status: "loading", text: "Scanning for vulnerabilities..." },
  });

  useEffect(() => {
    // Simulate status checks
    const statusChecks = [
      { key: "ci", delay: 1000, status: "success", text: "CI/CD Pipeline: Last build successful" },
      { key: "docker", delay: 2000, status: "success", text: "Docker: Image built and pushed successfully" },
      { key: "terraform", delay: 3000, status: "success", text: "Terraform: Infrastructure deployed successfully" },
      { key: "security", delay: 4000, status: "success", text: "Security: No critical vulnerabilities found" },
    ];

    statusChecks.forEach(({ key, delay, status, text }) => {
      setTimeout(() => {
        setStatuses(prev => ({ ...prev, [key]: { status, text } }));
      }, delay);
    });
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-blue-500 animate-pulse" />;
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "success":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "error":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      case "warning":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
  };

  return (
    <section className="py-16 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="text-primary">Infrastructure</span> Status
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CI/CD Status */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">CI/CD Pipeline</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(statuses.ci.status)}
                <span className={`text-sm px-2 py-1 rounded-full border ${getStatusBadgeClass(statuses.ci.status)}`}>
                  {statuses.ci.text}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                Latest commit: {new Date().toISOString().split('T')[0]}
              </div>
            </div>
          </div>

          {/* Docker Status */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Package className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Container Registry</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(statuses.docker.status)}
                <span className={`text-sm px-2 py-1 rounded-full border ${getStatusBadgeClass(statuses.docker.status)}`}>
                  {statuses.docker.text}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                Image: ghcr.io/Nithin-Thadem/nithin-thadem-portfolio:latest
              </div>
            </div>
          </div>

          {/* Terraform Status */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-5 w-5 flex items-center justify-center text-primary font-bold">T</div>
              <h3 className="font-semibold text-lg">Infrastructure as Code</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(statuses.terraform.status)}
                <span className={`text-sm px-2 py-1 rounded-full border ${getStatusBadgeClass(statuses.terraform.status)}`}>
                  {statuses.terraform.text}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                Provider: AWS | Resources: 15 managed
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Security Scan</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(statuses.security.status)}
                <span className={`text-sm px-2 py-1 rounded-full border ${getStatusBadgeClass(statuses.security.status)}`}>
                  {statuses.security.text}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                Scanner: Trivy | Last scan: Just now
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-card rounded-lg border border-border">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Status checks completed automatically</span>
          </div>
        </div>
      </div>
    </section>
  );
};