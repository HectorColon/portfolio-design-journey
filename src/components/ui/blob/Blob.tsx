
import React from 'react';
import { cn } from '@/lib/utils';

interface BlobProps {
  className?: string;
  imageUrl?: string;
}

const Blob = ({ className, imageUrl }: BlobProps) => {
  return (
    <div className={cn(
      "relative w-64 h-64 md:w-80 md:h-80 animate-blob bg-portfolio-primary",
      className
    )}>
      {imageUrl && (
        <div className="absolute inset-0 overflow-hidden animate-blob">
          <img 
            src={imageUrl} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Blob;
