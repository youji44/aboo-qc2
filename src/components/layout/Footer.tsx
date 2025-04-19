'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            © 2024 Aboo QC. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 