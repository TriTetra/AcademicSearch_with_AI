import React from 'react';
import SocialLinks from './SocialLinks';
// import LogoFooter from './LogoFooter';
import Logo from '../Logo&Brand/Logo';

const BrandSection = () => (
  <div className="flex flex-col">
    <div className='py-8'>
        <Logo variant='footer'/>
        <SocialLinks />
    </div>
  </div>
);

export default BrandSection;