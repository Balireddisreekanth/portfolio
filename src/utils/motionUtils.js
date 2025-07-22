import React from 'react';

// This is a simple mock implementation of motion components that applies CSS classes
// instead of actual animations for the portfolio demo
export const motion = {
  div: ({ children, initial, animate, transition, ...props }) => (
    <div 
      className="animate-fadeIn"
      {...props}
    >
      {children}
    </div>
  ),
};
