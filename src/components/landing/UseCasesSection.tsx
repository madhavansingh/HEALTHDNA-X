import { Activity, TrendingUp, Building, FileText } from 'lucide-react';

const useCases = [
  {
    icon: Activity,
    title: 'Disease Outbreak Detection',
    description: 'Identify emerging health threats in real-time across the national network. Early warning systems that could have detected COVID-19 weeks earlier.',
    stat: '3-4 weeks',
    statLabel: 'Earlier Detection',
  },
  {
    icon: TrendingUp,
    title: 'Resource Demand Forecasting',
    description: 'Predict ICU bed needs, medicine demand, and staffing requirements before shortages occur. Optimize resource allocation across regions.',
    stat: '94%',
    statLabel: 'Forecast Accuracy',
  },
  {
    icon: Building,
    title: 'Public Health Policy',
    description: 'Evidence-based policy making with real-time national health data. Measure intervention effectiveness across populations instantly.',
    stat: '10x',
    statLabel: 'Faster Insights',
  },
  {
    icon: FileText,
    title: 'Clinical Research',
    description: 'Accelerate drug development and clinical trials with federated cohort analysis. Access diverse patient populations without data sharing.',
    stat: '85%',
    statLabel: 'Cost Reduction',
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Use Cases</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            Transform <span className="gradient-text">Healthcare Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From outbreak detection to resource optimization, HEALTHDNA-X enables use cases 
            that were previously impossible due to data privacy constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-[hsl(190_70%_50%)]/10 flex items-center justify-center shrink-0 group-hover:from-primary/20 group-hover:to-[hsl(190_70%_50%)]/20 transition-colors">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold gradient-text">{useCase.stat}</span>
                    <span className="text-sm text-muted-foreground">{useCase.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
