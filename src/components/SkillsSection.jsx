import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // CI/CD & Automation
  { name: "GitHub Actions", level: 95, category: "cicd" },
  { name: "GitLab CI/CD", level: 85, category: "cicd" },
  { name: "Jenkins", level: 80, category: "cicd" },
  { name: "ArgoCD", level: 85, category: "cicd" },
  { name: "Azure DevOps", level: 75, category: "cicd" },
  { name: "CircleCI", level: 80, category: "cicd" },

  // Containerization & Orchestration
  { name: "Docker", level: 95, category: "containers" },
  { name: "Kubernetes", level: 90, category: "containers" },
  { name: "Helm", level: 85, category: "containers" },
  { name: "Docker Compose", level: 90, category: "containers" },
  { name: "Podman", level: 75, category: "containers" },
  { name: "Kustomize", level: 80, category: "containers" },

  // Infrastructure as Code
  { name: "Terraform", level: 90, category: "iac" },
  { name: "AWS CDK", level: 80, category: "iac" },
  { name: "Pulumi", level: 75, category: "iac" },
  { name: "Ansible", level: 85, category: "iac" },
  { name: "CloudFormation", level: 80, category: "iac" },

  // Cloud Platforms
  { name: "Google Cloud Platform", level: 95, category: "cloud" },
  { name: "Amazon Web Services", level: 85, category: "cloud" },
  { name: "Microsoft Azure", level: 75, category: "cloud" },
  { name: "DigitalOcean", level: 80, category: "cloud" },

  // Monitoring & Observability
  { name: "Prometheus", level: 85, category: "monitoring" },
  { name: "Grafana", level: 85, category: "monitoring" },
  { name: "ELK Stack", level: 80, category: "monitoring" },
  { name: "Datadog", level: 75, category: "monitoring" },
  { name: "Jaeger", level: 70, category: "monitoring" },
  { name: "New Relic", level: 70, category: "monitoring" },

  // Security & Compliance
  { name: "Trivy", level: 85, category: "security" },
  { name: "SonarQube", level: 75, category: "security" },
  { name: "OWASP ZAP", level: 70, category: "security" },
  { name: "Vault", level: 75, category: "security" },
  { name: "Snyk", level: 80, category: "security" },

  // Scripting & Automation
  { name: "Bash/Shell", level: 95, category: "scripting" },
  { name: "Python", level: 85, category: "scripting" },
  { name: "PowerShell", level: 80, category: "scripting" },
  { name: "YAML", level: 90, category: "scripting" },
  { name: "Go", level: 70, category: "scripting" },

  // Version Control
  { name: "Git", level: 95, category: "vcs" },
  { name: "GitHub", level: 95, category: "vcs" },
  { name: "GitLab", level: 85, category: "vcs" },
  { name: "Bitbucket", level: 80, category: "vcs" },
];

const categories = ["all", "cicd", "containers", "iac", "cloud", "monitoring", "security", "scripting", "vcs"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary"> DevOps</span> Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
