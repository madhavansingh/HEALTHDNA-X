import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, ShieldCheck, Lock, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-[hsl(190_70%_50%)]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 border border-primary/20 mb-8 opacity-0 animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-sm font-medium text-accent-foreground">
              Privacy-Preserving Healthcare AI
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 opacity-0 animate-fade-up stagger-1">
            National-Scale Healthcare AI
            <br />
            <span className="gradient-text">Without Sharing Patient Data</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up stagger-2">
            HEALTHDNA-X enables real-time national health intelligence through federated learning—
            training AI models across hospitals while keeping sensitive data where it belongs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up stagger-3">
            <Link to="/auth?mode=signup">
              <Button variant="hero" size="xl" className="group">
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="hero-outline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Explore Platform
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-up stagger-4">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">HIPAA Compliant</div>
                <div className="text-xs text-muted-foreground">Enterprise ready</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">Zero Data Sharing</div>
                <div className="text-xs text-muted-foreground">Privacy first</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">Real-time Insights</div>
                <div className="text-xs text-muted-foreground">Instant analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
