import React from 'react';
import SocialLinks from './SocialLinks';
import LogoFooter from './LogoFooter';

const BrandSection = () => (
  <div className="flex flex-col">
    <div className='py-8'>
        <LogoFooter />
        <SocialLinks />
    </div>
  </div>
);

export default BrandSection;