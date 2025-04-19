'use client';

import { useState } from 'react';
import DataTable from '@/components/DataTable';
import { UserIcon, EnvelopeIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  joinDate: string;
}

export default function AllUsersPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8901',
      role: 'Admin',
      department: 'Management',
      status: 'active',
      lastLogin: '2024-03-15 10:30',
      joinDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 8902',
      role: 'Manager',
      department: 'Operations',
      status: 'active',
      lastLogin: '2024-03-14 15:45',
      joinDate: '2023-02-20',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '+1 234 567 8903',
      role: 'Supervisor',
      department: 'Quality Control',
      status: 'inactive',
      lastLogin: '2024-03-10 09:20',
      joinDate: '2023-03-10',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      phone: '+1 234 567 8904',
      role: 'Technician',
      department: 'Production',
      status: 'pending',
      lastLogin: '2024-03-12 11:15',
      joinDate: '2024-01-05',
    },
  ]);

  const columns = [
    { 
      key: 'name', 
      label: 'Name',
      render: (value: string, row: User) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <UserIcon className="h-10 w-10 text-gray-400" />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{value}</div>
            <div className="text-gray-500">{row.email}</div>
          </div>
        </div>
      )
    },
    { 
      key: 'contact', 
      label: 'Contact',
      render: (_: unknown, row: User) => (
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-500">
            <EnvelopeIcon className="h-4 w-4 mr-2" />
            {row.email}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <PhoneIcon className="h-4 w-4 mr-2" />
            {row.phone}
          </div>
        </div>
      )
    },
    { 
      key: 'role', 
      label: 'Role & Department',
      render: (_: unknown, row: User) => (
        <div className="space-y-1">
          <div className="font-medium text-gray-900">{row.role}</div>
          <div className="text-sm text-gray-500">{row.department}</div>
        </div>
      )
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => {
        const statusColors = {
          active: 'bg-green-100 text-green-800',
          inactive: 'bg-red-100 text-red-800',
          pending: 'bg-yellow-100 text-yellow-800'
        };
        return (
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[value as keyof typeof statusColors]}`}>
            {value}
          </span>
        );
      }
    },
    { 
      key: 'dates', 
      label: 'Dates',
      render: (_: unknown, row: User) => (
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Joined: {new Date(row.joinDate).toLocaleDateString()}
          </div>
          <div className="text-sm text-gray-500">
            Last login: {new Date(row.lastLogin).toLocaleString()}
          </div>
        </div>
      )
    },
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
          <h1 className="text-2xl font-semibold text-gray-900">All Users</h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage all users in the system
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

      <DataTable<User>
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