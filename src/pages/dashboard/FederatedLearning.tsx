import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Progress } from '@/components/ui/progress';
import {
  Server,
  CheckCircle,
  Clock,
  RefreshCw,
  Signal,
  Wifi,
  WifiOff,
} from 'lucide-react';

const hospitalNodes = [
  { id: 1, name: 'Metro General Hospital', location: 'New York', status: 'active', lastUpdate: '2 min ago', progress: 100, dataPoints: 125000 },
  { id: 2, name: 'City Medical Center', location: 'Los Angeles', status: 'training', lastUpdate: '5 min ago', progress: 78, dataPoints: 98000 },
  { id: 3, name: 'Regional Health System', location: 'Chicago', status: 'active', lastUpdate: '1 min ago', progress: 100, dataPoints: 145000 },
  { id: 4, name: 'University Hospital', location: 'Boston', status: 'training', lastUpdate: '8 min ago', progress: 45, dataPoints: 87000 },
  { id: 5, name: 'Community Health Network', location: 'Houston', status: 'active', lastUpdate: '3 min ago', progress: 100, dataPoints: 112000 },
  { id: 6, name: 'Pacific Medical Group', location: 'Seattle', status: 'syncing', lastUpdate: '10 min ago', progress: 92, dataPoints: 76000 },
  { id: 7, name: 'Midwest Healthcare', location: 'Denver', status: 'offline', lastUpdate: '1 hour ago', progress: 0, dataPoints: 65000 },
  { id: 8, name: 'Southern Medical Center', location: 'Atlanta', status: 'active', lastUpdate: '4 min ago', progress: 100, dataPoints: 134000 },
];

const aggregationHistory = [
  { round: 128, timestamp: '2024-01-15 14:30', nodes: 512, accuracy: 94.7, duration: '4m 23s' },
  { round: 127, timestamp: '2024-01-15 10:15', nodes: 508, accuracy: 94.5, duration: '4m 18s' },
  { round: 126, timestamp: '2024-01-15 06:00', nodes: 510, accuracy: 94.2, duration: '4m 35s' },
  { round: 125, timestamp: '2024-01-14 22:00', nodes: 505, accuracy: 94.0, duration: '4m 28s' },
];

export default function FederatedLearning() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'training':
        return <RefreshCw className="w-4 h-4 text-primary animate-spin" />;
      case 'syncing':
        return <Signal className="w-4 h-4 text-info" />;
      case 'offline':
        return <WifiOff className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-success/10 text-success',
      training: 'bg-primary/10 text-primary',
      syncing: 'bg-info/10 text-info',
      offline: 'bg-destructive/10 text-destructive',
    };
    return styles[status as keyof typeof styles] || 'bg-muted text-muted-foreground';
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Federated Learning Monitor</h1>
          <p className="text-muted-foreground">Real-time overview of distributed model training</p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">508</div>
                <div className="text-sm text-muted-foreground">Nodes Online</div>
              </div>
            </div>
            <Progress value={99.2} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">99.2% network availability</p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">24</div>
                <div className="text-sm text-muted-foreground">Currently Training</div>
              </div>
            </div>
            <Progress value={24/512*100} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">Active training sessions</p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <Signal className="w-5 h-5 text-info" />
              </div>
              <div>
                <div className="text-2xl font-bold">128</div>
                <div className="text-sm text-muted-foreground">Aggregation Round</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Last completed: 2 min ago</p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <WifiOff className="w-5 h-5 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">Nodes Offline</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Scheduled maintenance</p>
          </div>
        </div>

        {/* Hospital Nodes Grid */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Hospital Nodes</h3>
              <p className="text-sm text-muted-foreground">Individual node status and training progress</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {hospitalNodes.map((node) => (
              <div
                key={node.id}
                className={`p-4 rounded-xl border transition-colors ${
                  node.status === 'offline' ? 'border-destructive/30 bg-destructive/5' : 'border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                    <Server className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusBadge(node.status)}`}>
                    {node.status}
                  </span>
                </div>
                <h4 className="font-medium text-sm mb-1 truncate">{node.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{node.location}</p>
                
                {node.status !== 'offline' && (
                  <>
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{node.progress}%</span>
                      </div>
                      <Progress value={node.progress} className="h-1.5" />
                    </div>
                  </>
                )}
                
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border mt-2">
                  <span>{node.dataPoints.toLocaleString()} records</span>
                  <span>{node.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aggregation History */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="mb-6">
            <h3 className="font-semibold">Aggregation History</h3>
            <p className="text-sm text-muted-foreground">Recent model aggregation rounds</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Round</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Timestamp</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Nodes</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Accuracy</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Duration</th>
                </tr>
              </thead>
              <tbody>
                {aggregationHistory.map((round) => (
                  <tr key={round.round} className="border-b border-border/50 hover:bg-accent/50">
                    <td className="py-3 px-4 font-medium">#{round.round}</td>
                    <td className="py-3 px-4 text-muted-foreground">{round.timestamp}</td>
                    <td className="py-3 px-4">{round.nodes}</td>
                    <td className="py-3 px-4">
                      <span className="text-success font-medium">{round.accuracy}%</span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{round.duration}</td>
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
