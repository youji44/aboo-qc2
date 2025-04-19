import { Metadata } from 'next';
import { useState } from 'react';
import DataTable from '@/components/DataTable';

export const metadata: Metadata = {
  title: 'Users Management',
  description: 'Manage users and their permissions in the system',
};

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'active',
      lastLogin: '2024-03-15 10:30',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'active',
      lastLogin: '2024-03-14 15:45',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Editor',
      status: 'inactive',
      lastLogin: '2024-03-10 09:20',
    },
  ]);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'lastLogin', label: 'Last Login' },
  ];

  const handleAdd = () => {
    // Implement add user logic
    console.log('Add user');
  };

  const handleEdit = (user: User) => {
    // Implement edit user logic
    console.log('Edit user:', user);
  };

  const handleDelete = (user: User) => {
    // Implement delete user logic
    setUsers(users.filter(u => u.id !== user.id));
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Users Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your users and their permissions in the system
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={handleAdd}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add New User
          </button>
        </div>
      </div>

      <DataTable
        title="User List"
        columns={columns}
        data={users}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
} 