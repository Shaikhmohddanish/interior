"use client"

import { useEffect } from 'react'

export function TextContrastEnhancer({ children }: { children: React.ReactNode }) {
  // This component applies text contrast fixes across the site
  useEffect(() => {
    // Apply contrast fixes when component mounts
    const applyContrastFixes = () => {
      // Target light gray text elements and make them darker
      const lightTextElements = document.querySelectorAll('.text-gray-400, .text-gray-500, .text-gray-300, [class*="text-gray-"]');
      lightTextElements.forEach((element) => {
        // Only enhance text that's too light - check if opacity is below threshold
        const computedStyle = window.getComputedStyle(element as Element);
        const opacity = parseFloat(computedStyle.opacity || '1');
        const color = computedStyle.color;
        
        // If it's a light color with low opacity, enhance contrast
        if ((color.includes('rgba') && opacity < 0.8) || color.includes('rgb(209,') || color.includes('rgb(156,')) {
          (element as HTMLElement).style.color = '#666';
        }
      });
    };

    applyContrastFixes();
    
    // Re-apply on window resize (in case of dynamic content changes)
    window.addEventListener('resize', applyContrastFixes);
    
    return () => {
      window.removeEventListener('resize', applyContrastFixes);
    };
  }, []);

  return <>{children}</>;
}
