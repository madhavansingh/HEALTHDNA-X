import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import {
  User,
  Building2,
  Shield,
  Bell,
  Key,
  Save,
} from 'lucide-react';

export default function Settings() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    organization: user?.organization || '',
    role: user?.role || 'analyst',
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    systemUpdates: true,
    securityAlerts: true,
    weeklyReports: false,
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    sessionTimeout: '30',
  });

  const handleSaveProfile = () => {
    toast({
      title: 'Profile updated',
      description: 'Your profile settings have been saved.',
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: 'Notifications updated',
      description: 'Your notification preferences have been saved.',
    });
  };

  const handleSaveSecurity = () => {
    toast({
      title: 'Security settings updated',
      description: 'Your security preferences have been saved.',
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        {/* Profile Settings */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Profile</h3>
              <p className="text-sm text-muted-foreground">Your personal information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                value={profile.organization}
                onChange={(e) => setProfile({ ...profile, organization: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" value={profile.role} disabled className="capitalize" />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <Button onClick={handleSaveProfile}>
              <Save className="w-4 h-4" />
              Save Profile
            </Button>
          </div>
        </div>

        {/* Organization Settings */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Organization</h3>
              <p className="text-sm text-muted-foreground">Organization type and configuration</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-secondary/30 border border-border">
              <h4 className="font-medium text-sm mb-1">Organization Type</h4>
              <p className="text-lg font-semibold">Hospital Network</p>
              <p className="text-xs text-muted-foreground mt-1">Full federated learning access</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/30 border border-border">
              <h4 className="font-medium text-sm mb-1">Subscription</h4>
              <p className="text-lg font-semibold">Enterprise</p>
              <p className="text-xs text-muted-foreground mt-1">Unlimited nodes • Priority support</p>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-accent/50 border border-primary/20">
            <p className="text-sm">
              <span className="font-medium">Organization ID:</span>{' '}
              <code className="text-xs bg-secondary px-2 py-1 rounded">org_healthdna_demo_2024</code>
            </p>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-sm text-muted-foreground">Configure your notification preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
              <div>
                <h4 className="font-medium text-sm">Email Alerts</h4>
                <p className="text-xs text-muted-foreground">Receive important alerts via email</p>
              </div>
              <Switch
                checked={notifications.emailAlerts}
                onCheckedChange={(checked) => setNotifications({ ...notifications, emailAlerts: checked })}
              />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
              <div>
                <h4 className="font-medium text-sm">System Updates</h4>
                <p className="text-xs text-muted-foreground">Notifications about platform updates</p>
              </div>
              <Switch
                checked={notifications.systemUpdates}
                onCheckedChange={(checked) => setNotifications({ ...notifications, systemUpdates: checked })}
              />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
              <div>
                <h4 className="font-medium text-sm">Security Alerts</h4>
                <p className="text-xs text-muted-foreground">Critical security notifications</p>
              </div>
              <Switch
                checked={notifications.securityAlerts}
                onCheckedChange={(checked) => setNotifications({ ...notifications, securityAlerts: checked })}
              />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
              <div>
                <h4 className="font-medium text-sm">Weekly Reports</h4>
                <p className="text-xs text-muted-foreground">Summary reports every week</p>
              </div>
              <Switch
                checked={notifications.weeklyReports}
                onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })}
              />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <Button onClick={handleSaveNotifications}>
              <Save className="w-4 h-4" />
              Save Notifications
            </Button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Security</h3>
              <p className="text-sm text-muted-foreground">Account security and authentication</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
              <div>
                <h4 className="font-medium text-sm">Two-Factor Authentication</h4>
                <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Switch
                checked={security.twoFactor}
                onCheckedChange={(checked) => setSecurity({ ...security, twoFactor: checked })}
              />
            </div>

            <div className="p-4 rounded-lg bg-secondary/30 border border-border">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-sm">Session Timeout</h4>
                  <p className="text-xs text-muted-foreground">Auto-logout after inactivity (minutes)</p>
                </div>
              </div>
              <Input
                type="number"
                value={security.sessionTimeout}
                onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
                className="w-24"
              />
            </div>

            <div className="p-4 rounded-lg bg-secondary/30 border border-border">
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">API Keys</h4>
                  <p className="text-xs text-muted-foreground">Manage API access tokens</p>
                </div>
                <Button variant="outline" size="sm">
                  Manage Keys
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <Button onClick={handleSaveSecurity}>
              <Save className="w-4 h-4" />
              Save Security Settings
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
