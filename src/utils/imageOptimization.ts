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
  // For local videos, we'll use a placeholder or first frame
  // In a real implementation, you might generate actual thumbnails
  if (videoSrc.includes('streetvid')) {
    return '/street1.jpg'; // Use street photo as thumbnail for street videos
  }
  // Default thumbnail for other videos
  return 'https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=400&q=60';
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