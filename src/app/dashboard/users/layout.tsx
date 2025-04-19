import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users | Aboo QC',
  description: 'Manage users and their permissions',
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 