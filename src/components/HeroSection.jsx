import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nithin
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Thadem
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            DevOps Engineer who <span className="text-primary font-semibold">automates everything</span>, 
            <span className="text-primary font-semibold"> documents always</span>, and keeps it 
            <span className="text-primary font-semibold"> reliable</span>. Building cloud-native solutions 
            with CI/CD, containerization, and Infrastructure as Code.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4 opacity-0 animate-fade-in-delay-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20">
              🚀 CI/CD Pipelines
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/20">
              🐳 Containerization
            </div>
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm border border-purple-500/20">
              🔧 Infrastructure as Code
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm border border-orange-500/20">
              ☁️ Cloud Native
            </div>
          </div>

          <div className="pt-8 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My DevOps Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
