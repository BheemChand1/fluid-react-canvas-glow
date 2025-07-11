import { useEffect } from 'react';
import { trackVisitor } from '../utils/analytics';

/**
 * Component that tracks page views only once when the app loads
 */
export const VisitorTracker = () => {
  useEffect(() => {
    // Track visitor on initial app load
    trackVisitor();
  }, []);
  
  return null; // This component doesn't render anything
};