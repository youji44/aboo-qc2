'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CalendarIcon,
  FolderIcon,
  ShieldCheckIcon,
  KeyIcon,
  BellIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function LeftMenu() {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['Dashboard']);

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev =>
      prev.includes(menu)
        ? prev.filter(item => item !== menu)
        : [...prev, menu]
    );
  };

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard/overview',
      icon: HomeIcon,
      current: pathname === '/dashboard/overview',
      submenu: [
        { name: 'Overview', href: '/dashboard/overview', icon: ChartBarIcon },
        { name: 'Analytics', href: '/dashboard/analytics', icon: DocumentTextIcon },
        { name: 'Calendar', href: '/dashboard/calendar', icon: CalendarIcon }
      ]
    },
    {
      name: 'Users',
      href: '/dashboard/users/all',
      icon: UserGroupIcon,
      current: pathname.startsWith('/dashboard/users'),
      submenu: [
        { name: 'All Users', href: '/dashboard/users/all', icon: UserGroupIcon },
        { name: 'Active Users', href: '/dashboard/users/active', icon: UserIcon },
        { name: 'User Groups', href: '/dashboard/users/groups', icon: FolderIcon }
      ]
    },
    {
      name: 'Profile',
      href: '/dashboard/profile',
      icon: UserIcon,
      current: pathname === '/dashboard/profile',
      submenu: [
        { name: 'Personal Info', href: '/dashboard/profile/personal', icon: UserIcon },
        { name: 'Security', href: '/dashboard/profile/security', icon: ShieldCheckIcon },
        { name: 'API Keys', href: '/dashboard/profile/api-keys', icon: KeyIcon }
      ]
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: Cog6ToothIcon,
      current: pathname === '/dashboard/settings',
      submenu: [
        { name: 'General', href: '/dashboard/settings/general', icon: Cog6ToothIcon },
        { name: 'Notifications', href: '/dashboard/settings/notifications', icon: BellIcon },
        { name: 'Billing', href: '/dashboard/settings/billing', icon: DocumentTextIcon }
      ]
    }
  ];

  return (
    <aside className="h-screen w-[250px] bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AQ</span>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Aboo QC</h1>
            <p className="text-xs text-gray-500">Quality Control</p>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 py-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isExpanded = expandedMenus.includes(item.name);
            const hasActiveSubmenu = item.submenu?.some(sub => pathname === sub.href);

            return (
              <div key={item.name}>
                <button
                  onClick={() => toggleMenu(item.name)}
                  className={`group flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
                    item.current || hasActiveSubmenu
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      item.current || hasActiveSubmenu ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="flex-1 text-left">{item.name}</span>
                  <ChevronRightIcon
                    className={`h-4 w-4 transform transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                {isExpanded && item.submenu && (
                  <div className="ml-10 mt-1 space-y-1">
                    {item.submenu.map((subItem) => {
                      const isSubActive = pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                            isSubActive
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <subItem.icon
                            className={`mr-3 h-4 w-4 ${
                              isSubActive ? 'text-blue-500' : 'text-gray-400'
                            }`}
                          />
                          {subItem.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Logout Section */}
      <div className="border-t border-gray-200 p-4">
        <button
          className="group flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
        >
          <ArrowLeftEndOnRectangleIcon
            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          Logout
        </button>
      </div>
    </aside>
  );
} 