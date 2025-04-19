import { UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';

interface AvatarProps {
  src?: string | null;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Avatar({ src, alt = 'User avatar', size = 'md', className = '' }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const sizeClass = sizeClasses[size];

  if (!src || imageError) {
    return (
      <div className={`${sizeClass} rounded-full bg-gray-100 flex items-center justify-center ${className}`}>
        <UserIcon className="h-2/3 w-2/3 text-gray-500" />
      </div>
    );
  }

  return (
    <div className={`${sizeClass} rounded-full overflow-hidden relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
} 