import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Settings, Users, PlusCircle, Box } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: '工作台' },
    { path: '/products', icon: Package, label: '产品管理' },
    { path: '/products/add', icon: PlusCircle, label: '发布产品' },
    { path: '/orders', icon: ShoppingCart, label: '订单中心' }, // Placeholder for now
    { path: '/customers', icon: Users, label: '客户管理' }, // Placeholder
    { path: '/settings', icon: Settings, label: '系统设置' }, // Placeholder
  ];

  return (
    <aside data-cmp="Sidebar" className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-full fixed left-0 top-0 bottom-0 z-20">
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2 text-primary">
          <Box className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-foreground">AdminPro</span>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-sidebar-accent hover:text-foreground'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Admin User</span>
            <span className="text-xs text-muted-foreground">admin@pixso.ai</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;