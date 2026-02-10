import React from 'react';
import Layout from '@/components/Layout';
import StatsCard from '@/components/StatsCard';
import { DollarSign, Users, CreditCard, Activity, Download, RefreshCw, Plus, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const data = [
  { name: '1月', total: 1500 },
  { name: '2月', total: 2300 },
  { name: '3月', total: 3200 },
  { name: '4月', total: 2900 },
  { name: '5月', total: 4500 },
  { name: '6月', total: 5800 },
  { name: '7月', total: 4900 },
];

const Dashboard: React.FC = () => {
  const recentSales = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+¥1,999.00",
      avatar: "https://ui.shadcn.com/avatars/01.png"
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+¥39.00",
      avatar: "https://ui.shadcn.com/avatars/02.png"
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+¥299.00",
      avatar: "https://ui.shadcn.com/avatars/03.png"
    },
    {
      name: "William Kim",
      email: "will@email.com",
      amount: "+¥99.00",
      avatar: "https://ui.shadcn.com/avatars/04.png"
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+¥39.00",
      avatar: "https://ui.shadcn.com/avatars/05.png"
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">仪表盘</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              刷新
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              导出
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              新建
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button>默认按钮</Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="destructive">危险按钮</Button>
          <Button variant="outline">边框按钮</Button>
          <Button variant="ghost">幽灵按钮</Button>
          <Button variant="link">链接按钮</Button>
          <Button size="sm">小按钮</Button>
          <Button size="lg">大按钮</Button>
          <Button size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button disabled>禁用按钮</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="总收入"
            value="¥45,231.89"
            description="较上月增长 20.1%"
            icon={DollarSign}
            trend="up"
            trendValue="+20.1%"
          />
          <StatsCard
            title="订阅用户"
            value="+2350"
            description="较上月增长 180.1%"
            icon={Users}
            trend="up"
            trendValue="+180.1%"
          />
          <StatsCard
            title="销售额"
            value="+12,234"
            description="较上月增长 19%"
            icon={CreditCard}
            trend="up"
            trendValue="+19%"
          />
          <StatsCard
            title="活跃状态"
            value="+573"
            description="过去一小时活跃用户"
            icon={Activity}
            trend="up"
            trendValue="+201"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>收入概览</CardTitle>
              <CardDescription>
                本年度总收入趋势分析
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis 
                      dataKey="name" 
                      stroke="#888888" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `¥${value}`}
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      formatter={(value) => [`¥${value}`, '收入']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="total" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorTotal)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>最近销售</CardTitle>
              <CardDescription>
                本月共有 265 笔销售订单
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {recentSales.map((sale, index) => (
                  <div key={index} className="flex items-center">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={sale.avatar} alt="Avatar" />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{sale.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {sale.email}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">{sale.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;