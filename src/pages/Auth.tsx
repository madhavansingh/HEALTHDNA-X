import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Eye, EyeOff, Loader2, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState<'signin' | 'signup'>(
    searchParams.get('mode') === 'signup' ? 'signup' : 'signin'
  );
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (mode === 'signup') {
      if (!name) {
        newErrors.name = 'Name is required';
      }
      if (!organization) {
        newErrors.organization = 'Organization is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (mode === 'signin') {
        const result = await signIn(email, password);
        if (result.success) {
          toast({
            title: 'Welcome back!',
            description: 'You have been signed in successfully.',
          });
          navigate('/dashboard');
        } else {
          toast({
            title: 'Sign in failed',
            description: result.error || 'Please check your credentials.',
            variant: 'destructive',
          });
        }
      } else {
        const result = await signUp(email, password, name, organization);
        if (result.success) {
          toast({
            title: 'Account created!',
            description: 'Welcome to HEALTHDNA-X.',
          });
          navigate('/dashboard');
        } else {
          toast({
            title: 'Sign up failed',
            description: result.error || 'Please try again.',
            variant: 'destructive',
          });
        }
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8">
        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to home</span>
        </Link>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-[hsl(190_70%_45%)] flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl tracking-tight">HEALTHDNA-X</span>
            </div>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">
                {mode === 'signin' ? 'Welcome back' : 'Create your account'}
              </h1>
              <p className="text-muted-foreground">
                {mode === 'signin' 
                  ? 'Sign in to access your dashboard' 
                  : 'Start your privacy-first healthcare journey'}
              </p>
            </div>

            {/* Demo Credentials */}
            {mode === 'signin' && (
              <div className="p-4 rounded-xl bg-accent/50 border border-primary/20 mb-6">
                <p className="text-sm font-medium mb-2">Demo Credentials</p>
                <p className="text-xs text-muted-foreground">
                  Email: <span className="font-mono text-foreground">demo@healthdna-x.com</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Password: <span className="font-mono text-foreground">demo123</span>
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === 'signup' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Dr. Jane Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="City General Hospital"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className={errors.organization ? 'border-destructive' : ''}
                    />
                    {errors.organization && <p className="text-xs text-destructive">{errors.organization}</p>}
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@organization.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={errors.password ? 'border-destructive pr-10' : 'pr-10'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
              </div>

              <Button type="submit" variant="hero" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            {/* Toggle Mode */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              {mode === 'signin' ? (
                <>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="text-primary font-medium hover:underline"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setMode('signin')}
                    className="text-primary font-medium hover:underline"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-[hsl(190_70%_45%)] p-12 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="relative text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Privacy-First Healthcare AI
          </h2>
          
          <p className="text-primary-foreground/80 mb-8">
            Join 500+ hospitals using federated learning to gain insights 
            without compromising patient privacy.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <div className="text-2xl font-bold text-primary-foreground">0</div>
              <div className="text-xs text-primary-foreground/70">Data Breaches</div>
            </div>
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <div className="text-2xl font-bold text-primary-foreground">100%</div>
              <div className="text-xs text-primary-foreground/70">HIPAA Compliant</div>
            </div>
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <div className="text-2xl font-bold text-primary-foreground">50M+</div>
              <div className="text-xs text-primary-foreground/70">Records Protected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
