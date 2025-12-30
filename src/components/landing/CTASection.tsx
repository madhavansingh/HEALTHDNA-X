import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[hsl(190_70%_45%)]" />
            <div className="absolute inset-0 mesh-gradient opacity-30" />
            
            {/* Content */}
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
                <Shield className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">
                  Start Your Privacy-First Journey
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform Healthcare Intelligence?
              </h2>

              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Join the leading healthcare organizations already using HEALTHDNA-X 
                to gain insights without compromising patient privacy.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/auth?mode=signup">
                  <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="xl" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                    Sign Up for Early Access
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">500+</div>
                  <div className="text-sm text-primary-foreground/70">Hospitals Connected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">50M+</div>
                  <div className="text-sm text-primary-foreground/70">Patient Records Protected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">99.9%</div>
                  <div className="text-sm text-primary-foreground/70">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
