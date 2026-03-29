import { useEffect, useState } from "react";

/**
 * Hook to defer animation rendering until after initial page paint + a delay.
 * This allows the browser to prioritize first paint metrics (FCP, LCP).
 * @param delayMs - Delay in milliseconds after which to show animations (default: 2000ms)
 * @returns boolean indicating if animations should be rendered
 */
export function useDeferredAnimation(delayMs: number = 2000): boolean {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Wait for initial paint via requestIdleCallback or fallback to timeout
    if ("requestIdleCallback" in window) {
      const id = (requestIdleCallback as any)(
        () => {
          const timer = setTimeout(() => setShouldRender(true), delayMs);
          return () => clearTimeout(timer);
        },
        { timeout: 3000 }
      );
      return () => (cancelIdleCallback as any)(id);
    } else {
      const timer = setTimeout(() => setShouldRender(true), delayMs);
      return () => clearTimeout(timer);
    }
  }, [delayMs]);

  return shouldRender;
}
