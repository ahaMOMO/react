import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header data-cmp="Header" className="h-16 bg-background/80 backdrop-blur-md border-b border-border px-6 flex items-center justify-between sticky top-0 z-10 w-full">
      <div className="flex items-center gap-4">
        {/* Mobile menu trigger placeholder could go here */}
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="搜索全局内容..." 
            className="pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-muted-foreground hover:bg-accent rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;