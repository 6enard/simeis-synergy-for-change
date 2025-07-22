// Image optimization utilities
export const createOptimizedImageUrl = (src: string, width?: number, quality?: number): string => {
  // For external URLs (Pexels), add optimization parameters
  if (src.includes('pexels.com')) {
    const url = new URL(src);
    if (width) url.searchParams.set('w', width.toString());
    if (quality) url.searchParams.set('q', quality.toString());
    url.searchParams.set('auto', 'compress');
    url.searchParams.set('cs', 'tinysrgb');
    return url.toString();
  }
  
  // For local images, return as-is (could be enhanced with a build-time optimization)
  return src;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadVideo = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.onloadedmetadata = () => resolve();
    video.onerror = reject;
    video.preload = 'metadata';
    video.src = src;
  });
};

// Generate thumbnail URL for videos
export const getVideoThumbnail = (videoSrc: string): string => {
  // Return the video source itself - we'll extract the first frame
  return videoSrc;
};

// Extract first frame from video as thumbnail
export const extractVideoThumbnail = (videoSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    video.crossOrigin = 'anonymous';
    video.preload = 'metadata';
    video.muted = true;
    
    video.onloadedmetadata = () => {
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Seek to first frame
      video.currentTime = 0.1;
    };
    
    video.onseeked = () => {
      if (ctx) {
        // Draw the current frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas to data URL
        const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.7);
        resolve(thumbnailUrl);
      } else {
        reject(new Error('Canvas context not available'));
      }
    };
    
    video.onerror = () => {
      reject(new Error('Failed to load video'));
    };
    
    video.src = videoSrc;
  });
};

// Generate low-quality placeholder for images
export const getLowQualityPlaceholder = (src: string): string => {
  if (src.includes('pexels.com')) {
    const url = new URL(src);
    url.searchParams.set('w', '50');
    url.searchParams.set('q', '20');
    url.searchParams.set('blur', '5');
    return url.toString();
  }
  
  // For local images, return a very small version
  return src;
};

// Intersection Observer for lazy loading
export const createLazyLoadObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1,
    }
  );
};