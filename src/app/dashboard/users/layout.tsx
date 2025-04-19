import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Manage users and their permissions in the system',
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 