import { ArrowUpRight, ArrowDownRight, Package, DollarSign, ShoppingCart } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, isPositive }: any) => (
  <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>{title}</p>
        <h3 style={{ fontSize: '1.875rem', color: '#0f172a', margin: 0 }}>{value}</h3>
      </div>
      <div style={{ padding: '0.75rem', backgroundColor: '#f1f5f9', borderRadius: '8px', color: 'var(--primary)' }}>
        <Icon size={24} />
      </div>
    </div>
    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
      <span style={{ display: 'flex', alignItems: 'center', color: isPositive ? '#10b981' : '#ef4444', fontWeight: '600' }}>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {trend}%
      </span>
      <span style={{ color: '#94a3b8' }}>vs last month</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ fontSize: '1.875rem', color: '#0f172a', marginBottom: '2rem' }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <StatCard title="Total Revenue" value="₹1,24,500" icon={DollarSign} trend={12.5} isPositive={true} />
        <StatCard title="Orders" value="452" icon={ShoppingCart} trend={8.2} isPositive={true} />
        <StatCard title="Total Products" value="45" icon={Package} trend={2.1} isPositive={false} />
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
          <h2 style={{ fontSize: '1.25rem', color: '#0f172a' }}>Recent Transactions</h2>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', color: '#64748b', fontSize: '0.875rem' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Order ID</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Customer</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Amount</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: '#ORD-001', name: 'Rahul Sharma', amount: '₹2,450', status: 'Completed', date: 'Today, 2:30 PM' },
              { id: '#ORD-002', name: 'Anita Desai', amount: '₹850', status: 'Processing', date: 'Today, 1:15 PM' },
              { id: '#ORD-003', name: 'Vikram Singh', amount: '₹3,200', status: 'Completed', date: 'Yesterday' },
              { id: '#ORD-004', name: 'Priya Patel', amount: '₹1,100', status: 'Completed', date: 'Yesterday' },
            ].map((txn) => (
              <tr key={txn.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '1rem 1.5rem', color: '#0f172a', fontWeight: '500' }}>{txn.id}</td>
                <td style={{ padding: '1rem 1.5rem', color: '#475569' }}>{txn.name}</td>
                <td style={{ padding: '1rem 1.5rem', color: '#0f172a' }}>{txn.amount}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '9999px', 
                    fontSize: '0.75rem', 
                    fontWeight: '600',
                    backgroundColor: txn.status === 'Completed' ? '#dcfce7' : '#fef08a',
                    color: txn.status === 'Completed' ? '#166534' : '#854d0e'
                  }}>
                    {txn.status}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', color: '#64748b' }}>{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
