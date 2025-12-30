import { AlertTriangle, Database, Lock, Shield } from 'lucide-react';

const problems = [
  {
    icon: Database,
    title: 'Data Silos',
    description: 'Critical health data trapped in isolated hospital systems, preventing comprehensive national insights.',
  },
  {
    icon: AlertTriangle,
    title: 'Privacy Risks',
    description: 'Centralizing patient data creates massive security vulnerabilities and compliance nightmares.',
  },
  {
    icon: Lock,
    title: 'Regulatory Barriers',
    description: 'HIPAA, GDPR, and local regulations make cross-institution data sharing nearly impossible.',
  },
  {
    icon: Shield,
    title: 'Trust Deficit',
    description: 'Patients and institutions resist data sharing due to legitimate privacy and security concerns.',
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">The Challenge</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            Healthcare Data Is <span className="gradient-text">Broken</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The current approach to healthcare AI requires centralizing sensitive patient data—
            creating unacceptable risks while leaving critical insights untapped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
