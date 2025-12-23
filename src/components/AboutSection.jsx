import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
<h3 className="text-2xl font-semibold">
              DevOps/Cloud Engineer
            </h3>

            <p className="text-muted-foreground">
              Certified Google Cloud Professional Cloud Architect with 3.5 years 
              of experience in designing, deploying, and managing secure, scalable, 
              and highly available cloud infrastructures on GCP and AWS.
            </p>

            <p className="text-muted-foreground">
              Proven expertise in Infrastructure-as-Code (Terraform), CI/CD automation, 
              containerization (Docker, Kubernetes), and cloud security. Experienced 
              in managing mission-critical Kubernetes environments and driving 
              cloud migration initiatives with measurable impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
<div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Architecture</h4>
                  <p className="text-muted-foreground">
                    Designing and deploying secure, scalable cloud infrastructures 
                    on GCP and AWS with enterprise-grade standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps Automation</h4>
                  <p className="text-muted-foreground">
                    Implementing CI/CD pipelines, Infrastructure-as-Code, and 
                    container orchestration for streamlined deployments.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Kubernetes Expertise</h4>
                  <p className="text-muted-foreground">
                    Managing mission-critical Kubernetes environments with 
                    high availability and scalability requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
