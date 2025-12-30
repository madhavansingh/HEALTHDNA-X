import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import {
  Activity,
  Building2,
  Brain,
  ShieldCheck,
  TrendingUp,
  Users,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const metrics = [
  {
    label: 'Active Hospitals',
    value: '512',
    change: '+12',
    trend: 'up',
    icon: Building2,
    color: 'primary',
  },
  {
    label: 'Model Accuracy',
    value: '94.7%',
    change: '+2.3%',
    trend: 'up',
    icon: Brain,
    color: 'success',
  },
  {
    label: 'Privacy Compliance',
    value: '100%',
    change: '0',
    trend: 'neutral',
    icon: ShieldCheck,
    color: 'success',
  },
  {
    label: 'Active Alerts',
    value: '3',
    change: '-2',
    trend: 'down',
    icon: AlertTriangle,
    color: 'warning',
  },
];

const modelPerformanceData = [
  { name: 'Jan', accuracy: 88.2, hospitals: 420 },
  { name: 'Feb', accuracy: 89.5, hospitals: 445 },
  { name: 'Mar', accuracy: 90.1, hospitals: 460 },
  { name: 'Apr', accuracy: 91.8, hospitals: 478 },
  { name: 'May', accuracy: 93.2, hospitals: 495 },
  { name: 'Jun', accuracy: 94.7, hospitals: 512 },
];

const diseaseData = [
  { name: 'Respiratory', cases: 2450 },
  { name: 'Cardiovascular', cases: 1820 },
  { name: 'Diabetes', cases: 1540 },
  { name: 'Infectious', cases: 890 },
  { name: 'Mental Health', cases: 720 },
];

const recentActivity = [
  { id: 1, action: 'Model aggregation completed', time: '2 minutes ago', type: 'success' },
  { id: 2, action: 'New hospital joined: Metro General', time: '15 minutes ago', type: 'info' },
  { id: 3, action: 'Outbreak alert: Flu surge in Region 4', time: '1 hour ago', type: 'warning' },
  { id: 4, action: 'Privacy audit passed', time: '3 hours ago', type: 'success' },
  { id: 5, action: 'Resource forecast updated', time: '5 hours ago', type: 'info' },
];

export default function Overview() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">National health intelligence at a glance</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  metric.color === 'primary' ? 'bg-primary/10' :
                  metric.color === 'success' ? 'bg-success/10' :
                  'bg-warning/10'
                }`}>
                  <metric.icon className={`w-5 h-5 ${
                    metric.color === 'primary' ? 'text-primary' :
                    metric.color === 'success' ? 'text-success' :
                    'text-warning'
                  }`} />
                </div>
                {metric.trend !== 'neutral' && (
                  <div className={`flex items-center gap-1 text-xs font-medium ${
                    metric.trend === 'up' ? 'text-success' : 'text-warning'
                  }`}>
                    {metric.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {metric.change}
                  </div>
                )}
              </div>
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Model Performance Chart */}
          <div className="lg:col-span-2 p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold">Model Performance</h3>
                <p className="text-sm text-muted-foreground">Accuracy and hospital participation over time</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Accuracy</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={modelPerformanceData}>
                <defs>
                  <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(174, 72%, 40%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(174, 72%, 40%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[85, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="accuracy"
                  stroke="hsl(174, 72%, 40%)"
                  strokeWidth={2}
                  fill="url(#accuracyGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Disease Distribution */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="mb-6">
              <h3 className="font-semibold">Disease Distribution</h3>
              <p className="text-sm text-muted-foreground">Current case breakdown</p>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={diseaseData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={11} width={80} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="cases" fill="hsl(174, 72%, 40%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Recent Activity</h3>
              <p className="text-sm text-muted-foreground">Latest system events and updates</p>
            </div>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-success' :
                  activity.type === 'warning' ? 'bg-warning' :
                  'bg-info'
                }`} />
                <span className="flex-1 text-sm">{activity.action}</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
