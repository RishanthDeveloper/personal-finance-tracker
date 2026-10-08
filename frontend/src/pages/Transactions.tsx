import { Search, Plus, Filter } from 'lucide-react';

export default function Transactions() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-text">Transactions</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          Add Transaction
        </button>
      </div>

      <div className="bg-surface p-4 rounded-xl border border-border shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <button className="px-3 py-1.5 text-sm bg-background border border-border rounded-lg flex items-center gap-2 whitespace-nowrap hover:bg-surface">
            <Filter className="w-3 h-3" /> All
          </button>
          <button className="px-3 py-1.5 text-sm bg-background border border-border rounded-lg whitespace-nowrap hover:bg-surface">Income</button>
          <button className="px-3 py-1.5 text-sm bg-background border border-border rounded-lg whitespace-nowrap hover:bg-surface">Expense</button>
          <button className="px-3 py-1.5 text-sm bg-background border border-border rounded-lg whitespace-nowrap hover:bg-surface">Category ▼</button>
        </div>
      </div>

      <div className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-background border-b border-border text-xs uppercase text-muted font-semibold">
              <th className="p-4">Date</th>
              <th className="p-4">Description</th>
              <th className="p-4">Category</th>
              <th className="p-4">Account</th>
              <th className="p-4">Type</th>
              <th className="p-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { date: 'Oct 08', desc: 'Salary', cat: 'Salary', acc: 'Bank', type: 'Income', amt: '+₹60,000' },
              { date: 'Oct 07', desc: 'Amazon', cat: 'Shopping', acc: 'UPI', type: 'Expense', amt: '-₹2,500' },
              { date: 'Oct 06', desc: 'Swiggy', cat: 'Food', acc: 'UPI', type: 'Expense', amt: '-₹450' },
              { date: 'Oct 05', desc: 'Internet Bill', cat: 'Bills', acc: 'Credit Card', type: 'Expense', amt: '-₹1,200' },
              { date: 'Oct 02', desc: 'Movie Tickets', cat: 'Entertainment', acc: 'UPI', type: 'Expense', amt: '-₹800' }
            ].map((tx, i) => (
              <tr key={i} className="border-b border-border last:border-0 hover:bg-background/50 transition-colors">
                <td className="p-4 text-muted whitespace-nowrap">{tx.date}</td>
                <td className="p-4 font-medium text-text whitespace-nowrap">{tx.desc}</td>
                <td className="p-4 text-muted">
                  <span className="px-2 py-1 bg-background rounded-md border border-border text-xs">{tx.cat}</span>
                </td>
                <td className="p-4 text-muted whitespace-nowrap">{tx.acc}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${tx.type === 'Income' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                    {tx.type}
                  </span>
                </td>
                <td className={`p-4 text-right font-semibold whitespace-nowrap ${tx.type === 'Income' ? 'text-success' : 'text-text'}`}>
                  {tx.amt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
