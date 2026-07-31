'use client';

import { useState, useMemo } from 'react';
import {
  Search,
  ArrowUp,
  ArrowDown,
  Download,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Calendar,
  Inbox,
} from 'lucide-react';

function isNewSubmission(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diffMs = now - d;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays <= 3;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function formatDateTime(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function StatusBadge({ isNew }) {
  return (
    <span
      className={`
        inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider
        ${isNew
          ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light'
          : 'bg-light-gray/60 text-medium-text dark:bg-white/8 dark:text-dark-text-muted'
        }
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isNew ? 'bg-primary dark:bg-primary-light' : 'bg-medium-text/40 dark:bg-white/30'}`} />
      {isNew ? 'New' : 'Older'}
    </span>
  );
}

function SubmissionRow({ item, isExpanded, onToggle }) {
  return (
    <>
      {/* Desktop row */}
      <tr className="hidden md:table-row group hover:bg-light-gray/30 dark:hover:bg-white/5 transition-colors duration-150">
        <td className="px-4 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/15 flex items-center justify-center text-primary dark:text-primary-light font-semibold text-xs flex-shrink-0">
              {item.name.charAt(0).toUpperCase()}
            </div>
            <span className="font-medium text-sm text-dark-text dark:text-dark-text-light truncate max-w-[140px]">
              {item.name}
            </span>
          </div>
        </td>
        <td className="px-4 py-3.5 text-sm text-medium-text dark:text-dark-text-muted truncate max-w-[180px]">
          {item.email}
        </td>
        <td className="px-4 py-3.5 text-sm text-medium-text dark:text-dark-text-muted">
          {item.phone || '—'}
        </td>
        <td className="px-4 py-3.5">
          <span className="text-sm font-medium text-dark-text dark:text-dark-text-light truncate block max-w-[160px]">
            {item.subject}
          </span>
        </td>
        <td className="px-4 py-3.5">
          <p className="text-sm text-medium-text dark:text-dark-text-muted truncate max-w-[200px]">
            {item.message}
          </p>
        </td>
        <td className="px-4 py-3.5">
          <StatusBadge isNew={isNewSubmission(item.createdAt)} />
        </td>
        <td className="px-4 py-3.5 text-xs text-medium-text dark:text-dark-text-muted whitespace-nowrap">
          {formatDate(item.createdAt)}
        </td>
        <td className="px-4 py-3.5">
          <button
            onClick={() => onToggle(item.id)}
            className="p-1.5 rounded-lg hover:bg-light-gray/50 dark:hover:bg-white/10 transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded
              ? <ChevronUp className="w-4 h-4 text-medium-text dark:text-dark-text-muted" />
              : <ChevronDown className="w-4 h-4 text-medium-text dark:text-dark-text-muted" />
            }
          </button>
        </td>
      </tr>

      {/* Expanded detail row (desktop) */}
      {isExpanded && (
        <tr className="hidden md:table-row">
          <td colSpan={8} className="px-4 py-0">
            <div className="pb-4 pl-[52px]">
              <div className="glass-card rounded-xl p-4 space-y-3 animate-in">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-medium-text dark:text-dark-text-muted">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{item.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-medium-text dark:text-dark-text-muted">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>{item.phone || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-medium-text dark:text-dark-text-muted">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{formatDateTime(item.createdAt)}</span>
                  </div>
                </div>
                <div className="border-t border-light-gray/30 dark:border-dark-border pt-3">
                  <h4 className="text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider mb-1.5">
                    Full Message
                  </h4>
                  <p className="text-sm text-dark-text dark:text-dark-text-light leading-relaxed whitespace-pre-wrap">
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}

      {/* Mobile card */}
      <tr className="md:hidden">
        <td colSpan={8} className="p-3">
          <div
            className="glass-card rounded-xl p-4 cursor-pointer active:scale-[0.98] transition-transform duration-150"
            onClick={() => onToggle(item.id)}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-primary/10 dark:bg-primary/15 flex items-center justify-center text-primary dark:text-primary-light font-semibold text-sm flex-shrink-0">
                  {item.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-sm text-dark-text dark:text-dark-text-light">{item.name}</p>
                  <p className="text-xs text-medium-text dark:text-dark-text-muted truncate max-w-[180px]">{item.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <StatusBadge isNew={isNewSubmission(item.createdAt)} />
                {isExpanded
                  ? <ChevronUp className="w-4 h-4 text-medium-text dark:text-dark-text-muted" />
                  : <ChevronDown className="w-4 h-4 text-medium-text dark:text-dark-text-muted" />
                }
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase">Subject:</span>
                <span className="text-sm text-dark-text dark:text-dark-text-light">{item.subject}</span>
              </div>
              <p className="text-xs text-medium-text dark:text-dark-text-muted line-clamp-2">
                {item.message}
              </p>
            </div>

            {isExpanded && (
              <div className="mt-3 pt-3 border-t border-light-gray/30 dark:border-dark-border space-y-3 animate-in">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center gap-2 text-medium-text dark:text-dark-text-muted">
                    <Mail className="w-3.5 h-3.5" />
                    <span className="truncate">{item.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-medium-text dark:text-dark-text-muted">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{item.phone || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-medium-text dark:text-dark-text-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDateTime(item.createdAt)}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider mb-1">Full Message</h4>
                  <p className="text-sm text-dark-text dark:text-dark-text-light leading-relaxed whitespace-pre-wrap">
                    {item.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        </td>
      </tr>
    </>
  );
}

export default function SubmissionsTable({ data, loading }) {
  const [search, setSearch] = useState('');
  const [sortDir, setSortDir] = useState('desc');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = useMemo(() => {
    if (!data) return [];
    let items = [...data];

    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (item) =>
          item.name?.toLowerCase().includes(q) ||
          item.email?.toLowerCase().includes(q) ||
          item.subject?.toLowerCase().includes(q) ||
          item.message?.toLowerCase().includes(q) ||
          item.phone?.includes(q)
      );
    }

    items.sort((a, b) => {
      const da = new Date(a.createdAt).getTime();
      const db = new Date(b.createdAt).getTime();
      return sortDir === 'desc' ? db - da : da - db;
    });

    return items;
  }, [data, search, sortDir]);

  function toggleSort() {
    setSortDir((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  }

  function exportCSV() {
    if (!filtered.length) return;
    const headers = ['Name', 'Email', 'Phone', 'Subject', 'Message', 'Date'];
    const rows = filtered.map((item) => [
      item.name,
      item.email,
      item.phone || '',
      item.subject,
      item.message.replace(/"/g, '""'),
      formatDateTime(item.createdAt),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-submissions-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleToggle(id) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  if (loading) return <SubmissionsTableSkeleton />;

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-text/60 dark:text-dark-text-muted/60" />
          <input
            type="text"
            placeholder="Search submissions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white dark:bg-dark-surface border border-light-gray/40 dark:border-dark-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-dark-text dark:text-dark-text-light placeholder:text-medium-text/50 dark:placeholder:text-dark-text-muted/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={toggleSort}
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-medium-text dark:text-dark-text-muted bg-white dark:bg-dark-surface border border-light-gray/40 dark:border-dark-border hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-200 whitespace-nowrap"
          >
            {sortDir === 'desc' ? <ArrowDown className="w-3.5 h-3.5" /> : <ArrowUp className="w-3.5 h-3.5" />}
            {sortDir === 'desc' ? 'Newest First' : 'Oldest First'}
          </button>
          <button
            onClick={exportCSV}
            disabled={!filtered.length}
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-white bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-medium-text dark:text-dark-text-muted">
        Showing {filtered.length} of {data?.length || 0} submissions
      </p>

      {/* Table / Cards */}
      {filtered.length === 0 ? (
        <EmptyState
          icon={Inbox}
          title="No submissions found"
          description={search ? 'Try adjusting your search query.' : 'Contact submissions will appear here once users submit the form.'}
        />
      ) : (
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
            <table className="w-full">
              <thead className="hidden md:table-header-group">
                <tr className="border-b border-light-gray/30 dark:border-dark-border">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Phone</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Subject</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Message</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-medium-text dark:text-dark-text-muted uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-gray/20 dark:divide-dark-border">
                {filtered.map((item) => (
                  <SubmissionRow
                    key={item.id}
                    item={item}
                    isExpanded={expandedId === item.id}
                    onToggle={handleToggle}
                  />
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

export function SubmissionsTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-72 h-10 bg-light-gray/50 dark:bg-white/8 rounded-xl animate-pulse" />
        <div className="flex gap-2">
          <div className="w-32 h-10 bg-light-gray/50 dark:bg-white/8 rounded-xl animate-pulse" />
          <div className="w-28 h-10 bg-light-gray/50 dark:bg-white/8 rounded-xl animate-pulse" />
        </div>
      </div>
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-4 space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-light-gray/50 dark:bg-white/8" />
              <div className="flex-1 space-y-2">
                <div className="h-3.5 w-32 bg-light-gray/50 dark:bg-white/8 rounded" />
                <div className="h-3 w-56 bg-light-gray/40 dark:bg-white/6 rounded" />
              </div>
              <div className="w-16 h-6 rounded-full bg-light-gray/40 dark:bg-white/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
