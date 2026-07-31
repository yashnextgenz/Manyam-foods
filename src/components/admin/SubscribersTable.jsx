'use client';

import { useState, useMemo, Fragment } from 'react';
import { Search, Download, Mail, Inbox } from 'lucide-react';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function isNewSubscriber(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diffDays = (now - d) / (1000 * 60 * 60 * 24);
  return diffDays <= 7;
}

export default function SubscribersTable({ data, loading }) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!data) return [];
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter((item) => item.email?.toLowerCase().includes(q));
  }, [data, search]);

  function exportCSV() {
    if (!filtered.length) return;
    const headers = ['Email', 'Subscribed Date'];
    const rows = filtered.map((item) => [item.email, formatDate(item.createdAt)]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) return <SubscribersTableSkeleton />;

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-text/60 dark:text-dark-text-muted/60" />
          <input
            type="text"
            placeholder="Search subscribers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white dark:bg-dark-surface border border-light-gray/40 dark:border-dark-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-dark-text dark:text-dark-text-light placeholder:text-medium-text/50 dark:placeholder:text-dark-text-muted/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200"
          />
        </div>
        <button
          onClick={exportCSV}
          disabled={!filtered.length}
          className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-white bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5" />
          Export CSV
        </button>
      </div>

      {/* Count */}
      <p className="text-xs text-medium-text dark:text-dark-text-muted">
        Showing {filtered.length} of {data?.length || 0} subscribers
      </p>

      {/* Table / Cards */}
      {filtered.length === 0 ? (
        <EmptyState
          icon={Inbox}
          title="No subscribers found"
          description={search ? 'Try adjusting your search query.' : 'Newsletter subscribers will appear here once users subscribe.'}
        />
      ) : (
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
            {/* Desktop Table */}
            <table className="w-full">
              <thead className="hidden md:table-header-group">
                <tr className="border-b border-light-gray/30 dark:border-dark-border">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">#</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Subscribed Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-gray/20 dark:divide-dark-border">
                {filtered.map((item, idx) => (
                  <Fragment key={item.id}>
                    {/* Desktop row */}
                    <tr className="hidden md:table-row hover:bg-light-gray/30 dark:hover:bg-white/5 transition-colors duration-150">
                      <td className="px-4 py-3.5 text-xs text-medium-text dark:text-dark-text-muted tabular-nums">
                        {idx + 1}
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <span className="text-sm text-dark-text dark:text-dark-text-light font-medium">
                            {item.email}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${isNewSubscriber(item.createdAt) ? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' : 'bg-light-gray/60 text-medium-text dark:bg-white/8 dark:text-dark-text-muted'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${isNewSubscriber(item.createdAt) ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-medium-text/40 dark:bg-white/30'}`} />
                          {isNewSubscriber(item.createdAt) ? 'Recent' : 'Older'}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-xs text-medium-text dark:text-dark-text-muted whitespace-nowrap">
                        {formatDate(item.createdAt)}
                      </td>
                    </tr>

                    {/* Mobile card */}
                    <tr className="md:hidden">
                      <td colSpan={4} className="p-3">
                        <div className="glass-card rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                              <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-dark-text dark:text-dark-text-light truncate">
                                {item.email}
                              </p>
                              <p className="text-xs text-medium-text dark:text-dark-text-muted mt-0.5">
                                {formatDate(item.createdAt)}
                              </p>
                            </div>
                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider flex-shrink-0 ${isNewSubscriber(item.createdAt) ? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' : 'bg-light-gray/60 text-medium-text dark:bg-white/8 dark:text-dark-text-muted'}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${isNewSubscriber(item.createdAt) ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-medium-text/40 dark:bg-white/30'}`} />
                              {isNewSubscriber(item.createdAt) ? 'Recent' : 'Older'}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center">
      <div className="w-14 h-14 rounded-2xl bg-light-gray/50 dark:bg-white/5 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-medium-text/50 dark:text-dark-text-muted/50" />
      </div>
      <h3 className="text-sm font-semibold text-dark-text dark:text-dark-text-light mb-1">{title}</h3>
      <p className="text-xs text-medium-text dark:text-dark-text-muted max-w-xs">{description}</p>
    </div>
  );
}

export function SubscribersTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-72 h-10 bg-light-gray/50 dark:bg-white/8 rounded-xl animate-pulse" />
        <div className="w-28 h-10 bg-light-gray/50 dark:bg-white/8 rounded-xl animate-pulse" />
      </div>
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-4 space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-light-gray/50 dark:bg-white/8" />
              <div className="flex-1 space-y-2">
                <div className="h-3.5 w-48 bg-light-gray/50 dark:bg-white/8 rounded" />
                <div className="h-3 w-24 bg-light-gray/40 dark:bg-white/6 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
