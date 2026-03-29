import { useEffect, useRef, useState } from "react";

/**
 * Hook to lazily load components that are below the fold.
 * Component only mounts when it comes into viewport + a margin buffer.
 * @param marginBottom - Margin in pixels to load before element becomes visible (default: 300px)
 * @returns ref to attach to component, boolean if visible
 */
export function useIntersectionVisible(marginBottom: number = 300): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after first intersection to prevent re-renders
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: `0px 0px ${marginBottom}px 0px`,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [marginBottom]);

  return [ref, isVisible];
}
