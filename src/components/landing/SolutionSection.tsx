import { ArrowRight, Building2, Cloud, Brain } from 'lucide-react';

export function SolutionSection() {
  return (
    <section id="solution" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Solution</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            Federated Learning: <span className="gradient-text">The Future of Healthcare AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Train AI models across hospitals without ever moving patient data. 
            Get national-scale insights while keeping data exactly where it belongs.
          </p>
        </div>

        {/* Visual Diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-3xl bg-card border border-border shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Hospitals */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Hospital {i}</div>
                      <div className="text-xs text-muted-foreground">Local Training</div>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-center text-muted-foreground pt-2">
                  Data never leaves premises
                </p>
              </div>

              {/* Arrows and Central */}
              <div className="flex flex-col items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                  <ArrowRight className="w-5 h-5" />
                  <span className="text-xs">Model Updates Only</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
                
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-[hsl(190_70%_45%)] flex items-center justify-center shadow-glow">
                  <Cloud className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <div className="text-center">
                  <div className="text-sm font-semibold">Secure Aggregation</div>
                  <div className="text-xs text-muted-foreground">Federated Server</div>
                </div>

                <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span className="text-xs">Global Model</span>
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </div>
              </div>

              {/* Output */}
              <div className="flex flex-col items-center">
                <div className="w-full p-6 rounded-xl bg-gradient-to-br from-primary/5 to-[hsl(190_70%_50%)]/5 border border-primary/20">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-[hsl(190_70%_45%)] flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">National Intelligence</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Disease outbreak detection</li>
                    <li>• Resource demand forecasting</li>
                    <li>• Treatment effectiveness analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Point */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <div className="px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium">
                  ✓ Zero raw data transmitted
                </div>
                <div className="px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium">
                  ✓ Full regulatory compliance
                </div>
                <div className="px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium">
                  ✓ Real-time insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
