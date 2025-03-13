import { useEffect } from 'react';

const getMetaViewport = () => document.querySelector('meta[name="viewport"]');

const tagNames = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];

const useStablePreventZoom = () => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const originalViewport = getMetaViewport()?.getAttribute('content');

    const handleTouchStart = (event: TouchEvent) => {
      const target = event.target as HTMLElement;

      if (originalViewport && (tagNames.indexOf(target.tagName) > -1 || target.isContentEditable)) {
        getMetaViewport()?.setAttribute('content', `${originalViewport}, maximum-scale=1.0, user-scalable=0`);
      }
    };

    const handleBlur = (event: FocusEvent) => {
      const target = event.target as HTMLElement;

      if (originalViewport && (tagNames.indexOf(target.tagName) > -1 || target.isContentEditable)) {
        getMetaViewport()?.setAttribute('content', originalViewport);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, true);
    window.addEventListener('blur', handleBlur, true);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart, true);
      window.removeEventListener('blur', handleBlur, true);

      if (originalViewport) {
        getMetaViewport()?.setAttribute('content', originalViewport);
      }
    };
  });
};

export default useStablePreventZoom;
