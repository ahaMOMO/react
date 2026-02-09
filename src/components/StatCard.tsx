import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon: Icon, color = "text-primary" }) => {
  const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';
  const trendBg = trend === 'up' ? 'bg-green-50' : trend === 'down' ? 'bg-red-50' : 'bg-gray-50';

  return (
    <div data-cmp="StatCard" className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-custom transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold text-foreground mt-2">{value}</h3>
        </div>
        <div className={`p-2 rounded-lg ${color} bg-opacity-10 bg-current`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
      </div>
      {change && (
        <div className="mt-4 flex items-center text-xs font-medium">
          <span className={`${trendColor} ${trendBg} px-2 py-0.5 rounded mr-2`}>
            {change}
          </span>
          <span className="text-muted-foreground">较上月</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;