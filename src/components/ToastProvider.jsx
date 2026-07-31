'use client';

import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

export const ToastContext = createContext(null);

const ICON_MAP = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

const COLOR_MAP = {
  success: {
    icon: 'text-emerald-500',
    border: 'border-emerald-200 dark:border-emerald-800/50',
    progress: 'bg-emerald-500',
  },
  error: {
    icon: 'text-red-500',
    border: 'border-red-200 dark:border-red-800/50',
    progress: 'bg-red-500',
  },
  info: {
    icon: 'text-blue-500',
    border: 'border-blue-200 dark:border-blue-800/50',
    progress: 'bg-blue-500',
  },
};

const DISMISS_MS = {
  success: 5000,
  error: 8000,
  info: 5000,
};

const MAX_VISIBLE = 3;

function ToastItem({ id, message, type, onDismiss }) {
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(100);
  const IconComp = ICON_MAP[type];
  const colors = COLOR_MAP[type];
  const dismissMs = DISMISS_MS[type];

  const handleClose = useCallback(() => {
    setExiting(true);
    setTimeout(() => onDismiss(id), 300);
  }, [id, onDismiss]);

  useEffect(() => {
    const startTime = Date.now();
    const frame = requestAnimationFrame(() => {
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 100 - (elapsed / dismissMs) * 100);
        setProgress(remaining);
        if (remaining > 0) {
          requestAnimationFrame(tick);
        } else {
          handleClose();
        }
      };
      tick();
    });
    return () => cancelAnimationFrame(frame);
  }, [dismissMs, handleClose]);

  return (
    <div
      role="alert"
      className={
        `flex items-start gap-3 w-80 max-w-[calc(100vw-2rem)] rounded-xl px-4 py-3 shadow-lg border transition-all duration-300 ${
          exiting
            ? 'translate-x-[120%] opacity-0'
            : 'translate-x-0 opacity-100'
        } bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl border-white/30 dark:border-white/10 ${colors.border}`
      }
    >
      <IconComp className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.icon}`} />
      <p className="text-sm text-dark-text dark:text-dark-text-light flex-1 leading-relaxed pt-0.5">{message}</p>
      <button
        onClick={handleClose}
        className="text-medium-text/50 dark:text-dark-text-muted/50 hover:text-dark-text dark:hover:text-dark-text-light transition-colors flex-shrink-0 mt-0.5"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
      {/* Progress bar */}
      <div className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full overflow-hidden bg-black/5 dark:bg-white/5">
        <div
          className={`h-full rounded-full ${colors.progress} transition-none`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message, type = 'info') => {
    const id = ++idRef.current;
    setToasts((prev) => {
      const next = [...prev, { id, message, type }];
      return next.slice(-MAX_VISIBLE);
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      addToast,
      success: (msg) => addToast(msg, 'success'),
      error: (msg) => addToast(msg, 'error'),
      info: (msg) => addToast(msg, 'info'),
    }),
    [addToast]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {/* Toast container */}
      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col-reverse gap-3 pointer-events-none"
        aria-live="polite"
        aria-label="Notifications"
      >
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem
              id={toast.id}
              message={toast.message}
              type={toast.type}
              onDismiss={dismiss}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}