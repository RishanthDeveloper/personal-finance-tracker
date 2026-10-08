import { AlertTriangle } from 'lucide-react';

export default function Budgets() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Monthly Budget</h1>
          <p className="text-muted text-sm mt-1">October 2026</p>
        </div>
      </div>

      <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
        <div className="flex justify-between items-end mb-2">
          <div>
            <p className="text-sm font-medium text-muted">Overall Budget</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-2xl font-bold text-text">₹18,500</h3>
              <span className="text-muted">/ ₹25,000</span>
            </div>
          </div>
          <span className="text-sm font-semibold text-text">74%</span>
        </div>
        <div className="w-full h-3 bg-background rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '74%' }}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-text mb-4">Categories</h3>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-text">Food</span>
              <span className="text-muted">₹4,500 / ₹5,000</span>
            </div>
            <div className="w-full h-2 bg-background rounded-full overflow-hidden">
              <div className="h-full bg-warning rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-text">Shopping</span>
              <span className="text-muted">₹6,200 / ₹7,000</span>
            </div>
            <div className="w-full h-2 bg-background rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-text">Transport</span>
              <span className="text-muted">₹2,100 / ₹4,000</span>
            </div>
            <div className="w-full h-2 bg-background rounded-full overflow-hidden">
              <div className="h-full bg-success rounded-full" style={{ width: '52%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-text mb-4">Alerts</h3>
          
          <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg flex gap-3">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-text">Food budget is 90% used</p>
              <p className="text-xs text-muted mt-1">You have ₹500 left for the next 23 days.</p>
            </div>
          </div>

          <div className="p-4 bg-background border border-border rounded-lg flex gap-3">
            <div className="w-5 h-5 flex items-center justify-center text-muted">📈</div>
            <div>
              <p className="text-sm font-medium text-text">Shopping spending increased 28%</p>
              <p className="text-xs text-muted mt-1">Compared to last month.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
