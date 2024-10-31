import { Card } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { AlertCircle, Package, ShoppingCart, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

const stats = [
  {
    name: 'Total Inventory Value',
    value: '$245,678',
    change: '+12.3%',
    icon: Package,
    trend: 'up',
  },
  {
    name: 'Low Stock Items',
    value: '23',
    change: '+2.1%',
    icon: AlertCircle,
    trend: 'up',
  },
  {
    name: 'Pending Orders',
    value: '45',
    change: '-3.2%',
    icon: ShoppingCart,
    trend: 'down',
  },
  {
    name: 'Monthly Revenue',
    value: '$67,890',
    change: '+23.1%',
    icon: TrendingUp,
    trend: 'up',
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={cn(
                "rounded-full p-3",
                stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              )}>
                <stat.icon className={cn(
                  "h-5 w-5",
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                )} />
              </div>
            </div>
            <div className="mt-4">
              <span className={cn(
                "text-sm font-medium",
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              )}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-600"> from last month</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Inventory Value Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {/* Add your recent activity items here */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 rounded-full p-2">
                <Package className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">New stock received</p>
                <p className="text-sm text-gray-600">50 units of Product XYZ</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">2h ago</span>
            </div>
            {/* Add more activity items as needed */}
          </div>
        </Card>
      </div>
    </div>
  );
}