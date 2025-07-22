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