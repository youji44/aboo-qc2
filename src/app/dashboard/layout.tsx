'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import LeftMenu from '@/components/layout/LeftMenu';
import Footer from '@/components/layout/Footer';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Left Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} fixed left-0 top-0 h-screen w-[250px] z-10`}>
        <LeftMenu />
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-h-screen ${isMenuOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}>
        {/* Header */}
        <div className="h-16 flex-shrink-0 bg-white shadow flex items-center px-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="flex-1">
            <Header />
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <div className="h-16 flex-shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
} 