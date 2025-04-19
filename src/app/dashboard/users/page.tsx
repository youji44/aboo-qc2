'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  UserGroupIcon,
  UserIcon,
  FolderIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function UsersPage() {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['Users']);

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
      <div className="bg-white shadow-sm rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900">Users Management</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your users and their permissions
          </p>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center justify-between px-4 py-3 rounded-lg ${
                  item.current
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center">
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <ChevronRightIcon
                  className={`h-5 w-5 ${
                    item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 