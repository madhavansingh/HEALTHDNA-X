import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { RealtimeIndicator } from '@/components/RealtimeIndicator';
import {
  Shield,
  LayoutDashboard,
  Activity,
  BarChart3,
  FileCheck,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Bell,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/federated', label: 'Federated Learning', icon: Activity },
  { href: '/dashboard/insights', label: 'Insights & Analytics', icon: BarChart3 },
  { href: '/dashboard/governance', label: 'Consent & Governance', icon: FileCheck },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex w-full">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center gap-2 px-6 border-b border-border">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(190_70%_45%)] flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">HEALTHDNA-X</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="ml-auto lg:hidden p-1 hover:bg-accent rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-[hsl(190_70%_45%)] flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{user?.name || 'User'}</div>
                <div className="text-xs text-muted-foreground truncate">{user?.organization || 'Organization'}</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full justify-start" onClick={handleSignOut}>
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 bg-background/95 backdrop-blur border-b border-border flex items-center px-6 gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-accent rounded-lg"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1" />

          {/* Real-time Indicator */}
          <RealtimeIndicator />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Header Actions */}
          <button className="relative p-2 hover:bg-accent rounded-lg">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </button>

          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-border">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[hsl(190_70%_45%)] flex items-center justify-center text-primary-foreground font-semibold text-xs">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div className="text-sm">
              <div className="font-medium">{user?.name || 'User'}</div>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
