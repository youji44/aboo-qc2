import Link from 'next/link';

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="bg-blue-600 p-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-white hover:text-blue-200">
            ← Back to Home
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
} 