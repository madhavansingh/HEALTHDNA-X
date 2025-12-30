import { Server, RefreshCw, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Server,
    title: 'Local Model Training',
    description: 'Each hospital trains AI models on their local data. Patient records never leave the institution. Models learn patterns while data stays protected.',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: 'Secure Federated Aggregation',
    description: 'Only model parameters are shared—never raw data. Our secure aggregation protocol combines learnings from all nodes into a unified global model.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'National Health Intelligence',
    description: 'Access real-time dashboards showing disease trends, resource needs, and predictive insights across the entire healthcare network.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            Three Steps to <span className="gradient-text">National Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our federated learning platform makes it simple to participate in nation-wide health analytics 
            without compromising patient privacy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-primary/10 z-0" />
                )}
                
                <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift h-full">
                  {/* Step Number */}
                  <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[hsl(190_70%_45%)] flex items-center justify-center text-sm font-bold text-primary-foreground shadow-md">
                    {step.number}
                  </span>

                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
