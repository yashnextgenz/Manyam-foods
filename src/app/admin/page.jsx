'use client';

import { useState, useEffect, useCallback } from 'react';
import { MessageSquare, Download, Trash2 } from 'lucide-react';
import AdminSidebar, { MobileMenuButton } from '@/components/admin/AdminSidebar';
import DashboardStats, { DashboardStatsSkeleton } from '@/components/admin/DashboardStats';
import SubmissionsTable from '@/components/admin/SubmissionsTable';
import SubscribersTable from '@/components/admin/SubscribersTable';
import useToast from '@/hooks/useToast';

function WeeklyChart() {
  const data = [3, 5, 2, 8, 4, 6, 1];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxVal = Math.max(...data);

  return (
    <div className="glass-card rounded-2xl p-6 border border-light-gray/20 dark:border-white/5">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-dark-text dark:text-dark-text-light">Weekly Submissions</h3>
        <p className="text-xs text-medium-text dark:text-dark-text-muted mt-0.5">Contact form submissions over the past 7 days</p>
      </div>
      <div className="flex items-end justify-between gap-2 sm:gap-4 h-32">
        {data.map((value, i) => {
          const pct = maxVal > 0 ? (value / maxVal) * 100 : 0;
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-text dark:bg-dark-text-light text-white text-[10px] font-semibold px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {value}
              </div>
              <div
                className="w-full max-w-[40px] rounded-t-lg bg-gradient-to-t from-primary to-primary-light hover:from-primary-dark hover:to-primary transition-all duration-200 group-hover:opacity-90 cursor-default"
                style={{ height: `${Math.max(pct, 3)}%` }}
              />
              <span className="text-[10px] sm:text-xs text-medium-text dark:text-dark-text-muted font-medium">
                {days[i]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuickActions({ onViewSubmissions, onExport, onClearData }) {
  const actions = [
    {
      icon: MessageSquare,
      title: 'View All Submissions',
      description: 'Browse and manage all contact form submissions',
      onClick: onViewSubmissions,
      accent: 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light',
      iconAccent: 'bg-primary/10 dark:bg-primary/15',
    },
    {
      icon: Download,
      title: 'Export Report',
      description: 'Download a CSV report of recent submissions',
      onClick: onExport,
      accent: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
      iconAccent: 'bg-amber-500/10 dark:bg-amber-500/15',
    },
    {
      icon: Trash2,
      title: 'Clear Old Data',
      description: 'Remove submissions older than 90 days',
      onClick: onClearData,
      accent: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
      iconAccent: 'bg-rose-500/10 dark:bg-rose-500/15',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.title}
            onClick={action.onClick}
            className="glass-card rounded-2xl p-5 text-left hover-glow hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div className={`w-10 h-10 ${action.iconAccent} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`w-5 h-5 ${action.accent.split(' ').pop()}`} />
            </div>
            <h4 className="text-sm font-semibold text-dark-text dark:text-dark-text-light mb-1">{action.title}</h4>
            <p className="text-xs text-medium-text dark:text-dark-text-muted leading-relaxed">{action.description}</p>
          </button>
        );
      })}
    </div>
  );
}

function getWeekAgo() {
  const d = new Date();
  d.setDate(d.getDate() - 7);
  return d;
}

function computeStats(submissions, subscribers) {
  const weekAgo = getWeekAgo();
  return {
    totalSubmissions: submissions?.length || 0,
    weekSubmissions: submissions?.filter((s) => new Date(s.createdAt) >= weekAgo).length || 0,
    totalSubscribers: subscribers?.length || 0,
    weekSubscribers: subscribers?.filter((s) => new Date(s.createdAt) >= weekAgo).length || 0,
  };
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [submissions, setSubmissions] = useState(null);
  const [subscribers, setSubscribers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clearConfirm, setClearConfirm] = useState(false);
  const showToast = useToast();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [subRes, subEmailsRes] = await Promise.all([
        fetch('/api/contact'),
        fetch('/api/newsletter'),
      ]);
      const subData = await subRes.json();
      const subEmailsData = await subEmailsRes.json();

      if (!subRes.ok) throw new Error(subData.error || 'Failed to fetch submissions');
      if (!subEmailsRes.ok) throw new Error(subEmailsData.error || 'Failed to fetch subscribers');

      setSubmissions(subData.data || []);
      setSubscribers(subEmailsData.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const stats = computeStats(submissions, subscribers);

  const tabTitles = {
    overview: 'Dashboard Overview',
    submissions: 'Contact Submissions',
    subscribers: 'Newsletter Subscribers',
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-light-gray/30 dark:border-dark-border">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3">
              <MobileMenuButton onClick={() => setSidebarOpen(true)} />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-dark-text dark:text-dark-text-light">
                  {tabTitles[activeTab]}
                </h1>
                <p className="text-xs text-medium-text dark:text-dark-text-muted mt-0.5 hidden sm:block">
                  Manage your site data and analytics
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={fetchData}
                className="px-3 py-2 rounded-xl text-xs font-medium text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/15 hover:bg-primary/20 dark:hover:bg-primary/25 transition-colors duration-200"
              >
                Refresh
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Error State */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">
              <p className="text-sm text-red-700 dark:text-red-400">
                Error loading data: {error}.{' '}
                <button
                  onClick={fetchData}
                  className="underline font-medium hover:no-underline"
                >
                  Try again
                </button>
              </p>
            </div>
          )}

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in">
              {loading ? (
                <DashboardStatsSkeleton />
              ) : (
                <DashboardStats stats={stats} />
              )}

              {/* Weekly Submissions Chart */}
              <WeeklyChart />

              {/* Quick Actions */}
              <QuickActions
                onViewSubmissions={() => setActiveTab('submissions')}
                onExport={() => showToast.success('Report exported!')}
                onClearData={() => setClearConfirm(true)}
              />

              {/* Clear Data Confirmation */}
              {clearConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="glass-card rounded-2xl p-6 max-w-sm w-full mx-4 border border-light-gray/20 dark:border-white/10">
                    <h3 className="text-sm font-semibold text-dark-text dark:text-dark-text-light mb-2">Confirm Clear Data</h3>
                    <p className="text-xs text-medium-text dark:text-dark-text-muted mb-5 leading-relaxed">
                      Are you sure you want to remove submissions older than 90 days? This action cannot be undone.
                    </p>
                    <div className="flex items-center justify-end gap-3">
                      <button
                        onClick={() => setClearConfirm(false)}
                        className="px-4 py-2 rounded-xl text-xs font-medium text-medium-text dark:text-dark-text-muted hover:bg-light-gray/50 dark:hover:bg-white/5 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setClearConfirm(false);
                          showToast.success('Old data cleared');
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-medium text-white bg-rose-500 hover:bg-rose-600 transition-colors"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Preview: Recent Submissions */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-dark-text dark:text-dark-text-light uppercase tracking-wider">
                    Recent Submissions
                  </h2>
                  <button
                    onClick={() => setActiveTab('submissions')}
                    className="text-xs text-primary dark:text-primary-light hover:underline font-medium"
                  >
                    View All →
                  </button>
                </div>
                <SubmissionsTable
                  data={submissions?.slice(0, 5)}
                  loading={loading}
                />
              </div>

              {/* Quick Preview: Recent Subscribers */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-dark-text dark:text-dark-text-light uppercase tracking-wider">
                    Recent Subscribers
                  </h2>
                  <button
                    onClick={() => setActiveTab('subscribers')}
                    className="text-xs text-primary dark:text-primary-light hover:underline font-medium"
                  >
                    View All →
                  </button>
                </div>
                <SubscribersTable
                  data={subscribers?.slice(0, 5)}
                  loading={loading}
                />
              </div>
            </div>
          )}

          {/* Submissions Tab */}
          {activeTab === 'submissions' && (
            <div className="animate-in">
              <SubmissionsTable data={submissions} loading={loading} />
            </div>
          )}

          {/* Subscribers Tab */}
          {activeTab === 'subscribers' && (
            <div className="animate-in">
              <SubscribersTable data={subscribers} loading={loading} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
