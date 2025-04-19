'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function UserPage({ params }: PageProps) {
  const router = useRouter();
  const [user] = useState<User>({
    id: Number(params.id),
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-03-15 10:30',
  });

  const handleEdit = () => {
    // Implement edit logic
    console.log('Edit user:', user);
  };

  const handleDelete = () => {
    // Implement delete logic
    console.log('Delete user:', user);
    router.push('/dashboard/users/all');
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">User Details</h3>
          <div className="flex space-x-3">
            <button
              onClick={handleEdit}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PencilIcon className="h-5 w-5 mr-2" />
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <TrashIcon className="h-5 w-5 mr-2" />
              Delete
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Role</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.role}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.status}
                </span>
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Last Login</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.lastLogin}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 