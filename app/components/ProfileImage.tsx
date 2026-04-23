'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ProfileImage({ src, alt, width, height, className }: ProfileImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Ccircle cx='75' cy='75' r='75' fill='%23e5e7eb'/%3E%3Ctext x='75' y='85' text-anchor='middle' fill='%236b7280' font-size='60'%3E👤%3C/text%3E%3C/svg%3E");
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  );
}