'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import DataTable from '@/components/DataTable';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  UserGroupIcon,
  UserIcon,
  FolderIcon,
} from '@heroicons/react/24/outline';

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
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['Users']);
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

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev =>
      prev.includes(menu)
        ? prev.filter(item => item !== menu)
        : [...prev, menu]
    );
  };

  const navigation = [
    {
      name: 'All Users',
      href: '/dashboard/users/all',
      icon: UserGroupIcon,
      current: pathname === '/dashboard/users/all',
    },
    {
      name: 'Active Users',
      href: '/dashboard/users/active',
      icon: UserIcon,
      current: pathname === '/dashboard/users/active',
    },
    {
      name: 'User Groups',
      href: '/dashboard/users/groups',
      icon: FolderIcon,
      current: pathname === '/dashboard/users/groups',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow ${
              item.current ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <item.icon
              className={`h-8 w-8 ${
                item.current ? 'text-blue-500' : 'text-gray-400'
              }`}
            />
            <div className="ml-4">
              <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
              <p className="mt-1 text-sm text-gray-500">
                {item.name === 'All Users' && 'View and manage all users'}
                {item.name === 'Active Users' && 'View currently active users'}
                {item.name === 'User Groups' && 'Manage user groups and permissions'}
              </p>
            </div>
          </Link>
        ))}
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