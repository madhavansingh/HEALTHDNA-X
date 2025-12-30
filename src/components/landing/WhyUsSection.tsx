import { ShieldCheck, Globe, Scale, Briefcase, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Privacy-First Architecture',
    description: 'Built from the ground up with differential privacy, secure aggregation, and zero-knowledge proofs.',
    highlights: ['End-to-end encryption', 'No raw data transmission', 'Audit trails'],
  },
  {
    icon: Globe,
    title: 'Infinitely Scalable',
    description: 'From 10 hospitals to 10,000. Our architecture scales horizontally without compromising performance.',
    highlights: ['Cloud-native design', 'Edge computing ready', 'Low bandwidth usage'],
  },
  {
    icon: Scale,
    title: 'Regulation Ready',
    description: 'Pre-certified for major healthcare regulations worldwide. Deploy with confidence.',
    highlights: ['HIPAA compliant', 'GDPR ready', 'SOC 2 Type II'],
  },
  {
    icon: Briefcase,
    title: 'Business Ready',
    description: 'Enterprise-grade reliability with SLA guarantees, dedicated support, and custom integrations.',
    highlights: ['99.99% uptime SLA', '24/7 support', 'Custom deployment'],
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why HEALTHDNA-X</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            Built for <span className="gradient-text">Real-World Healthcare</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the complexities of healthcare data. That's why we've built the most 
            comprehensive federated learning platform in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(190_70%_45%)] flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
