import { Search, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-surface border-b border-border h-16 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-muted hover:text-text rounded-full hover:bg-background transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-border pl-4 ml-2">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-text">Harish</p>
            <p className="text-xs text-muted">Free Plan</p>
          </div>
          <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
