import { ArrowUpRight, ArrowDownRight, Wallet, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-text">Good morning, Harish 👋</h1>
          <p className="text-muted text-sm mt-1">Here's your financial overview</p>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted">Total Balance</p>
              <h3 className="text-2xl font-bold text-text mt-2">₹52,480</h3>
            </div>
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Wallet className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted">Monthly Income</p>
              <h3 className="text-2xl font-bold text-text mt-2">₹65,000</h3>
            </div>
            <div className="p-2 bg-success/10 text-success rounded-lg">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted">Monthly Expenses</p>
              <h3 className="text-2xl font-bold text-text mt-2">₹18,520</h3>
            </div>
            <div className="p-2 bg-danger/10 text-danger rounded-lg">
              <ArrowDownRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted">Savings Rate</p>
              <div className="flex items-center gap-2 mt-2">
                <h3 className="text-2xl font-bold text-text">71.5%</h3>
                <span className="text-xs font-medium text-success flex items-center bg-success/10 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8.2%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Analytics Placeholder */}
        <div className="lg:col-span-2 bg-surface p-6 rounded-xl border border-border shadow-sm min-h-[300px] flex items-center justify-center">
           <div className="text-center">
             <TrendingUp className="w-12 h-12 text-muted mx-auto mb-3" />
             <h3 className="text-lg font-medium text-text">Spending Trend</h3>
             <p className="text-sm text-muted">Chart will be rendered here (Recharts)</p>
           </div>
        </div>

        {/* AI Insight */}
        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
             <span>🤖</span> AI Assistant
          </h3>
          <div className="flex-1 bg-background rounded-lg p-4 border border-border space-y-4">
             <p className="text-sm text-text">Your spending increased 18% this month. Biggest increase: <strong>Food</strong>.</p>
             <div className="bg-primary/5 border border-primary/20 p-3 rounded-md">
               <p className="text-xs font-medium text-primary mb-1">💡 Recommendation</p>
               <p className="text-sm">Reduce food spending by ₹1,500 next month to stay on track with your goals.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions Placeholder */}
      <div className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h3 className="text-lg font-bold text-text">Recent Transactions</h3>
          <button className="text-sm text-primary hover:underline font-medium">View All</button>
        </div>
        <div className="p-6 flex flex-col gap-4">
          {[
            { name: 'Salary', category: 'Income', amount: '+₹60,000', type: 'income', date: 'Oct 08' },
            { name: 'Amazon Shopping', category: 'Shopping', amount: '-₹2,500', type: 'expense', date: 'Oct 07' },
            { name: 'Swiggy', category: 'Food', amount: '-₹450', type: 'expense', date: 'Oct 06' }
          ].map((tx, i) => (
             <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0 last:pb-0">
               <div className="flex items-center gap-4">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'income' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                   {tx.type === 'income' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                 </div>
                 <div>
                   <p className="font-medium text-text">{tx.name}</p>
                   <p className="text-xs text-muted">{tx.category} • {tx.date}</p>
                 </div>
               </div>
               <p className={`font-semibold ${tx.type === 'income' ? 'text-success' : 'text-text'}`}>{tx.amount}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
