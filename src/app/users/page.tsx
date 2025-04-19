import Link from 'next/link';

// Sample users data
const users = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Bob Johnson' },
];

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-white">Users</h1>
          </div>
          
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              {users.map((user) => (
                <Link 
                  key={user.id}
                  href={`/users/${user.id}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-lg font-medium text-gray-900">{user.name}</h2>
                  <p className="text-sm text-gray-500">Click to view profile</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 