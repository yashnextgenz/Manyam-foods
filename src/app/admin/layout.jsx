export const metadata = {
  title: 'Admin Dashboard - Manyam Foods',
  description: 'Admin dashboard for managing contact submissions and newsletter subscribers.',
};

// Auth check placeholder: In production, add NextAuth.js session check here
// to restrict access to authenticated admin users only.

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg">
      {children}
    </div>
  );
}
