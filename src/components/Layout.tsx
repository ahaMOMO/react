import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Settings, 
  Search, 
  Bell, 
  Menu
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: '仪表盘', path: '/', icon: LayoutDashboard },
    { name: '用户管理', path: '/users', icon: Users },
    { name: '产品管理', path: '/products', icon: Package },
    { name: '系统设置', path: '/settings', icon: Settings },
  ];

  return (
    <div data-cmp="Layout" className="min-h-screen bg-slate-50 flex flex-col items-center">
      {/* 
         Constraint Container: 
         - Fixed width on desktop: 1440px
         - Centered (items-center on parent + w-full max-w-[1440px])
      */}
      <div className="w-full max-w-[1440px] bg-background min-h-screen flex shadow-2xl overflow-hidden">
        
        {/* Sidebar */}
        <aside 
          className={`
            ${isSidebarOpen ? 'w-64' : 'w-20'} 
            bg-slate-900 text-white transition-all duration-300 flex flex-col
            border-r border-slate-800
          `}
        >
          <div className="h-16 flex items-center justify-center border-b border-slate-800">
            {isSidebarOpen ? (
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Admin Pro
              </h1>
            ) : (
              <span className="text-xl font-bold text-blue-400">AP</span>
            )}
          </div>

          <nav className="flex-1 py-6 px-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-3 py-2 rounded-lg transition-colors
                  ${isActive(item.path) 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'}
                `}
                title={item.name}
              >
                <item.icon size={20} />
                {isSidebarOpen && <span className="ml-3 font-medium">{item.name}</span>}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-800">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full flex items-center justify-center text-slate-400 hover:text-white"
            >
              <Menu size={20} />
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 bg-slate-50/50">
          {/* Header */}
          <header className="h-16 bg-background border-b px-6 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center w-96">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="搜索..."
                  className="w-full bg-slate-100 pl-9 md:w-[300px] lg:w-[300px] border-none focus-visible:ring-1"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-500">
                <Bell size={20} />
              </Button>
              <div className="flex items-center space-x-3 border-l pl-4">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-medium">管理员</p>
                  <p className="text-xs text-muted-foreground">admin@example.com</p>
                </div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;