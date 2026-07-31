'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Droplets, LayoutDashboard, MessageSquare, Users, LogOut, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'submissions', label: 'Submissions', icon: MessageSquare },
  { id: 'subscribers', label: 'Subscribers', icon: Users },
];

export default function AdminSidebar({ activeTab, onTabChange, isOpen, onToggle }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64
          bg-white dark:bg-dark-surface
          border-r border-light-gray/40 dark:border-dark-border
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Branding */}
        <div className="flex items-center justify-between p-5 border-b border-light-gray/30 dark:border-dark-border">
          <Link href="/" className="flex items-center gap-2.5 group/logo">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center group-hover/logo:scale-110 transition-transform duration-300">
              <Droplets className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-dark-text dark:text-dark-text-light leading-tight">Manyam Foods</span>
              <span className="text-[10px] text-medium-text dark:text-dark-text-muted tracking-wider uppercase leading-tight">Admin Panel</span>
            </div>
          </Link>
          <button
            onClick={onToggle}
            className="lg:hidden p-1.5 rounded-lg hover:bg-light-gray/50 dark:hover:bg-white/10 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5 text-medium-text dark:text-dark-text-muted" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1" aria-label="Admin navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  if (isOpen) onToggle();
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-200
                  ${isActive
                    ? 'bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-light'
                    : 'text-medium-text dark:text-dark-text-muted hover:bg-light-gray/50 dark:hover:bg-white/5 hover:text-dark-text dark:hover:text-dark-text-light'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={`w-[18px] h-[18px] ${isActive ? 'text-primary dark:text-primary-light' : ''}`} />
                {item.label}
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-light-gray/30 dark:border-dark-border">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-medium-text dark:text-dark-text-muted hover:bg-light-gray/50 dark:hover:bg-white/5 hover:text-dark-text dark:hover:text-dark-text-light transition-all duration-200"
          >
            <LogOut className="w-[18px] h-[18px]" />
            Back to Site
          </Link>
        </div>
      </aside>
    </>
  );
}

export function MobileMenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 rounded-xl bg-white dark:bg-dark-surface border border-light-gray/40 dark:border-dark-border hover:bg-light-gray/50 dark:hover:bg-white/10 transition-all duration-200"
      aria-label="Open sidebar"
    >
      <Menu className="w-5 h-5 text-dark-text dark:text-dark-text-light" />
    </button>
  );
}