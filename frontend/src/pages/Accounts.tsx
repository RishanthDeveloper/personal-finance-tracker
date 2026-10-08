import { Plus, CreditCard, Landmark, Wallet } from 'lucide-react';

export default function Accounts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">My Accounts</h1>
          <p className="text-muted text-sm mt-1">Manage your multi-currency accounts</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          Add Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Landmark className="w-24 h-24 text-primary" />
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="px-2 py-1 bg-background rounded border border-border text-xs font-medium">INR</span>
            </div>
            <p className="text-sm text-muted font-medium">HDFC Bank</p>
            <h3 className="text-2xl font-bold text-text mt-1">₹32,450</h3>
            <p className="text-xs text-success mt-2 flex items-center gap-1">Synced successfully 2h ago</p>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <CreditCard className="w-24 h-24 text-warning" />
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <div className="p-2 bg-warning/10 text-warning rounded-lg">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="px-2 py-1 bg-background rounded border border-border text-xs font-medium">INR</span>
            </div>
            <p className="text-sm text-muted font-medium">Credit Card</p>
            <h3 className="text-2xl font-bold text-text mt-1">₹8,200</h3>
            <p className="text-xs text-muted mt-2">Bill due in 5 days</p>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Wallet className="w-24 h-24 text-success" />
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <div className="p-2 bg-success/10 text-success rounded-lg">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="px-2 py-1 bg-background rounded border border-border text-xs font-medium">USD</span>
            </div>
            <p className="text-sm text-muted font-medium">USD Wallet</p>
            <h3 className="text-2xl font-bold text-text mt-1">$350</h3>
            <p className="text-xs text-muted mt-2">≈ ₹29,400</p>
          </div>
        </div>
      </div>
    </div>
  );
}
