import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ReceiptText, PlusCircle, PieChart, Settings } from 'lucide-react';

export default function MobileNav() {
  const location = useLocation();

  const items = [
    { icon: LayoutDashboard, path: '/' },
    { icon: ReceiptText, path: '/transactions' },
    { icon: PlusCircle, path: '/transactions/new', special: true },
    { icon: PieChart, path: '/analytics' },
    { icon: Settings, path: '/settings' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border px-6 py-3 flex justify-between items-center z-50">
      {items.map((item, idx) => (
        <Link 
          key={idx} 
          to={item.path}
          className={`${item.special ? '-mt-8 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl' : location.pathname === item.path ? 'text-primary' : 'text-muted hover:text-text'} transition-all`}
        >
          <item.icon className={item.special ? 'w-6 h-6' : 'w-6 h-6'} />
        </Link>
      ))}
    </div>
  );
}
