
import { Leva, useControls} from 'leva';

import Greeting from './Greeting';
import ButtonsHero from './ButtonsHero';
import TurtleScene from '../ThreeModels/TurtleScene';
import HumanDNAScene from '../ThreeModels/HumanDNAScene';
import SearchBar from '../SearchHero/SearchBar';


export const DesktopSide = () => {

    {/*{const controls = useControls('Turtle_3D', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationX: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationY: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationZ: {
      value: 2.5,
      min: -10,
      max: 10
    },
    scale:{
      value: 1,
      min: 0.1,
      max: 10
    }})*/}

  return (
      <section className="min-h-screen w-full relative">
        {/* Navbar Altındaki Hero Bölümü */}

        <div className='h-52'>

        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Hero İçeriği */}
          <Greeting />
        </div>

        <div className='w-full h-full py-12'>
          <SearchBar />
        </div>

      </section>
  );
};
