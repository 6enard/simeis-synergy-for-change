import React, { useState, useRef, useEffect } from 'react';
import { createOptimizedImageUrl, createLazyLoadObserver, getLowQualityPlaceholder } from '../utils/imageOptimization';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  quality?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  placeholder?: string;
  showThumbnail?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  quality = 80,
  loading = 'lazy',
  decoding = 'async',
  placeholder,
  showThumbnail = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [error, setError] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      const observer = createLazyLoadObserver((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      });

      observer.observe(imgRef.current);

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }
  }, [loading]);

  const optimizedSrc = createOptimizedImageUrl(src, width, quality);
  const thumbnailSrc = showThumbnail ? getLowQualityPlaceholder(src) : null;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Thumbnail */}
      {showThumbnail && thumbnailSrc && !isLoaded && (
        <img
          src={thumbnailSrc}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            thumbnailLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setThumbnailLoaded(true)}
        />
      )}

      {/* Loading Placeholder */}
      {!isLoaded && (!showThumbnail || !thumbnailLoaded) && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          {placeholder ? (
            <img src={placeholder} alt="" className="w-full h-full object-cover opacity-50" />
          ) : (
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          )}
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={loading}
          decoding={decoding}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

export default LazyImage;