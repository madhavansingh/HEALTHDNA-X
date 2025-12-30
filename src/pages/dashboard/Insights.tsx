import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, Activity } from 'lucide-react';

const diseaseTrendData = [
  { month: 'Jul', respiratory: 1800, cardiovascular: 1200, infectious: 400 },
  { month: 'Aug', respiratory: 2100, cardiovascular: 1150, infectious: 450 },
  { month: 'Sep', respiratory: 2400, cardiovascular: 1300, infectious: 520 },
  { month: 'Oct', respiratory: 2800, cardiovascular: 1250, infectious: 680 },
  { month: 'Nov', respiratory: 3200, cardiovascular: 1400, infectious: 850 },
  { month: 'Dec', respiratory: 3800, cardiovascular: 1350, infectious: 920 },
  { month: 'Jan', respiratory: 3500, cardiovascular: 1450, infectious: 780 },
];

const resourceForecastData = [
  { week: 'Week 1', icuBeds: 78, ventilators: 45, staffing: 92 },
  { week: 'Week 2', icuBeds: 82, ventilators: 48, staffing: 88 },
  { week: 'Week 3', icuBeds: 85, ventilators: 52, staffing: 85 },
  { week: 'Week 4', icuBeds: 88, ventilators: 55, staffing: 82 },
];

const regionData = [
  { region: 'Northeast', cases: 12500, trend: 'up', change: '+8.2%' },
  { region: 'Southeast', cases: 9800, trend: 'down', change: '-3.1%' },
  { region: 'Midwest', cases: 8200, trend: 'up', change: '+5.4%' },
  { region: 'Southwest', cases: 7100, trend: 'stable', change: '+0.8%' },
  { region: 'West', cases: 11200, trend: 'up', change: '+12.3%' },
];

const alerts = [
  { id: 1, severity: 'high', title: 'Flu Outbreak Detected', region: 'Region 4', description: 'Unusual spike in respiratory cases. 23% above seasonal average.' },
  { id: 2, severity: 'medium', title: 'ICU Capacity Warning', region: 'Region 2', description: 'ICU beds reaching 85% capacity. Consider resource reallocation.' },
  { id: 3, severity: 'low', title: 'Medication Supply Low', region: 'Region 7', description: 'Antibiotic reserves below optimal levels.' },
];

export default function Insights() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Insights & Analytics</h1>
          <p className="text-muted-foreground">Comprehensive health intelligence and forecasting</p>
        </div>

        {/* Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-xl border ${
                alert.severity === 'high' ? 'border-destructive/50 bg-destructive/5' :
                alert.severity === 'medium' ? 'border-warning/50 bg-warning/5' :
                'border-info/50 bg-info/5'
              }`}
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                  alert.severity === 'high' ? 'text-destructive' :
                  alert.severity === 'medium' ? 'text-warning' :
                  'text-info'
                }`} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <span className="text-xs text-muted-foreground">{alert.region}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{alert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disease Trends Chart */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Disease Trends</h3>
              <p className="text-sm text-muted-foreground">Monthly case progression by category</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Respiratory</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-2" />
                <span className="text-muted-foreground">Cardiovascular</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-3" />
                <span className="text-muted-foreground">Infectious</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={diseaseTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Line type="monotone" dataKey="respiratory" stroke="hsl(174, 72%, 40%)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="cardiovascular" stroke="hsl(160, 60%, 45%)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="infectious" stroke="hsl(190, 70%, 50%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Resource Forecast */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="mb-6">
              <h3 className="font-semibold">Resource Demand Forecast</h3>
              <p className="text-sm text-muted-foreground">4-week utilization prediction (%)</p>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={resourceForecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="icuBeds" name="ICU Beds" fill="hsl(174, 72%, 40%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="ventilators" name="Ventilators" fill="hsl(160, 60%, 45%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="staffing" name="Staffing" fill="hsl(190, 70%, 50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Regional Heatmap */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="mb-6">
              <h3 className="font-semibold">Regional Overview</h3>
              <p className="text-sm text-muted-foreground">Case distribution by region</p>
            </div>
            <div className="space-y-4">
              {regionData.map((region) => (
                <div key={region.region} className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium">{region.region}</div>
                  <div className="flex-1">
                    <div className="h-8 rounded-lg bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-[hsl(190_70%_50%)] rounded-lg transition-all duration-500"
                        style={{ width: `${(region.cases / 15000) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-24">
                    {region.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-destructive" />
                    ) : region.trend === 'down' ? (
                      <TrendingDown className="w-4 h-4 text-success" />
                    ) : (
                      <Activity className="w-4 h-4 text-muted-foreground" />
                    )}
                    <span className={`text-sm font-medium ${
                      region.trend === 'up' ? 'text-destructive' :
                      region.trend === 'down' ? 'text-success' :
                      'text-muted-foreground'
                    }`}>
                      {region.change}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground w-20 text-right">
                    {region.cases.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
