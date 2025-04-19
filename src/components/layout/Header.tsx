'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface MenuItemProps {
  active: boolean;
  children: React.ReactNode;
}

const MenuItem = ({ active, children }: MenuItemProps) => (
  <div
    className={`${
      active ? 'bg-gray-100' : ''
    } block px-4 py-2 text-sm text-gray-700`}
  >
    {children}
  </div>
);

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-end">
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                3
              </span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <UserCircleIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <MenuItem active={active}>
                        Your Profile
                      </MenuItem>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MenuItem active={active}>
                        Settings
                      </MenuItem>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MenuItem active={active}>
                        Sign out
                      </MenuItem>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
} 