'use client';

import { useState } from 'react';
import Link from 'next/link';
import Avatar from '@/components/Avatar';
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex items-center justify-end">
      {/* Notifications */}
      <div className="relative">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <BellIcon className="h-5 w-5" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        {showNotifications && (
          <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <div className="px-4 py-2 text-sm text-gray-700">
                No new notifications
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Profile Dropdown */}
      <div className="relative ml-4">
        <button
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          className="flex items-center space-x-3 focus:outline-none"
        >
          <Avatar
            src={null}
            alt="John Doe"
            size="sm"
          />
          <span className="text-sm font-medium text-gray-700">John Doe</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-400" />
        </button>
        {showProfileDropdown && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Your Profile
              </Link>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 