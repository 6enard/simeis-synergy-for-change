import React, { useState, useRef, useEffect } from 'react';
import { createLazyLoadObserver, extractVideoThumbnail } from '../utils/imageOptimization';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  src: string;
  className?: string;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  loading?: 'lazy' | 'eager';
  showThumbnail?: boolean;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  className = '',
  muted = true,
  playsInline = true,
  controls = false,
  autoPlay = false,
  preload = 'none',
  loading = 'lazy',
  showThumbnail = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [error, setError] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (loading === 'lazy' && videoRef.current) {
      const observer = createLazyLoadObserver((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      });

      observer.observe(videoRef.current);

      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, [loading]);

  // Extract thumbnail from video
  useEffect(() => {
    if (showThumbnail && isInView && !thumbnail) {
      extractVideoThumbnail(src)
        .then((thumbnailUrl) => {
          setThumbnail(thumbnailUrl);
          setThumbnailLoaded(true);
        })
        .catch(() => {
          // Fallback to a default image if thumbnail extraction fails
          setThumbnail('/street1.jpg');
          setThumbnailLoaded(true);
        });
    }
  }, [src, showThumbnail, isInView, thumbnail]);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div ref={videoRef} className={`relative overflow-hidden ${className}`}>
      {/* Video Thumbnail */}
      {showThumbnail && thumbnail && !showVideo && (
        <div className="relative w-full h-full">
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              thumbnailLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {thumbnailLoaded && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={handlePlayClick}
                className="bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                <Play className="h-8 w-8 text-gray-800 ml-1" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Loading placeholder */}
      {!isLoaded && isInView && showVideo && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">🎥</div>
            <div className="text-sm">Video unavailable</div>
          </div>
        </div>
      )}

      {/* Actual video */}
      {isInView && showVideo && (
        <video
          src={src}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          autoPlay={autoPlay}
          preload="metadata"
          onLoadedMetadata={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

export default LazyVideo;