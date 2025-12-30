import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
  FileCheck,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Download,
  Filter,
} from 'lucide-react';

const consentSettings = [
  {
    id: 'disease-surveillance',
    title: 'Disease Surveillance',
    description: 'Participate in national disease outbreak detection and monitoring',
    enabled: true,
  },
  {
    id: 'resource-forecasting',
    title: 'Resource Forecasting',
    description: 'Contribute to ICU and medication demand predictions',
    enabled: true,
  },
  {
    id: 'clinical-research',
    title: 'Clinical Research',
    description: 'Allow anonymized data for federated clinical trials',
    enabled: false,
  },
  {
    id: 'policy-analytics',
    title: 'Policy Analytics',
    description: 'Support public health policy development initiatives',
    enabled: true,
  },
];

const auditLogs = [
  { id: 1, action: 'Model training initiated', user: 'System', timestamp: '2024-01-15 14:32:18', status: 'success' },
  { id: 2, action: 'Consent updated: Clinical Research disabled', user: 'Dr. Sarah Chen', timestamp: '2024-01-15 12:15:00', status: 'success' },
  { id: 3, action: 'Data access request from Region 4', user: 'System', timestamp: '2024-01-15 10:45:32', status: 'denied' },
  { id: 4, action: 'Privacy audit completed', user: 'Compliance Bot', timestamp: '2024-01-15 08:00:00', status: 'success' },
  { id: 5, action: 'New hospital onboarded: Metro General', user: 'Admin', timestamp: '2024-01-14 16:22:10', status: 'success' },
  { id: 6, action: 'Model aggregation completed (Round 127)', user: 'System', timestamp: '2024-01-14 14:30:00', status: 'success' },
  { id: 7, action: 'Unauthorized access attempt blocked', user: 'Security System', timestamp: '2024-01-14 11:18:45', status: 'denied' },
];

const participationStats = [
  { metric: 'Data Contributions', value: '1.2M', subtext: 'Records this month' },
  { metric: 'Training Rounds', value: '128', subtext: 'Total participated' },
  { metric: 'Compliance Score', value: '100%', subtext: 'HIPAA compliant' },
  { metric: 'Uptime', value: '99.97%', subtext: 'Last 30 days' },
];

export default function Governance() {
  const [consents, setConsents] = useState(
    consentSettings.reduce((acc, setting) => {
      acc[setting.id] = setting.enabled;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleConsentChange = (id: string, enabled: boolean) => {
    setConsents((prev) => ({ ...prev, [id]: enabled }));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Consent & Governance</h1>
          <p className="text-muted-foreground">Manage data sharing permissions and view audit logs</p>
        </div>

        {/* Participation Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {participationStats.map((stat) => (
            <div key={stat.metric} className="p-5 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm font-medium">{stat.metric}</div>
              <div className="text-xs text-muted-foreground">{stat.subtext}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Consent Controls */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Data Sharing Consent</h3>
                <p className="text-sm text-muted-foreground">Control what data programs your organization participates in</p>
              </div>
            </div>

            <div className="space-y-4">
              {consentSettings.map((setting) => (
                <div
                  key={setting.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border"
                >
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-sm mb-1">{setting.title}</h4>
                    <p className="text-xs text-muted-foreground">{setting.description}</p>
                  </div>
                  <Switch
                    checked={consents[setting.id]}
                    onCheckedChange={(checked) => handleConsentChange(setting.id, checked)}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">
                Changes to consent settings take effect immediately. All data sharing is encrypted and anonymized.
              </p>
              <Button size="sm" variant="outline">
                <FileCheck className="w-4 h-4" />
                Download Consent Report
              </Button>
            </div>
          </div>

          {/* Participation Status */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">Participation Status</h3>
                <p className="text-sm text-muted-foreground">Your organization's federation status</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="font-medium text-sm text-success">Active Participant</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your organization is actively contributing to the federated learning network.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-secondary/50 text-center">
                  <div className="text-lg font-bold">512</div>
                  <div className="text-xs text-muted-foreground">Network Hospitals</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 text-center">
                  <div className="text-lg font-bold">3</div>
                  <div className="text-xs text-muted-foreground">Active Programs</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                <h4 className="font-medium text-sm mb-2">Next Scheduled Actions</h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    Model training: 4 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    Privacy audit: 3 days
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    Compliance review: 14 days
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Log */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Audit Log</h3>
              <p className="text-sm text-muted-foreground">Complete history of data access and system events</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id} className="border-b border-border/50 hover:bg-accent/50">
                    <td className="py-3 px-4">
                      {log.status === 'success' ? (
                        <CheckCircle className="w-4 h-4 text-success" />
                      ) : (
                        <XCircle className="w-4 h-4 text-destructive" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm">{log.action}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{log.user}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{log.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
