import React from 'react';
import { DesktopSide } from './DesktopSide';
import { MobileSide } from './MobileSide';
import { useMediaQuery } from 'react-responsive';

const IntegrateAll = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="w-full h-full">
      {isMobile ? <MobileSide /> : <DesktopSide />}
    </div>
  );
};

export default IntegrateAll;