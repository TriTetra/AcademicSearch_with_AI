
import { Leva, useControls} from 'leva';

import Greeting from './Greeting';
import ButtonsHero from './ButtonsHero';
import TurtleScene from './TurtleScene';
import HumanDNAScene from './HumanDNAScene';


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
    <section className="min-h-screen w-full flex flex-col relative">
      
      {/* Navbar Altındaki Hero Bölümü */}
      <div className="flex flex-row justify-between w-full mt-10 items-start">

          {/* Sol Taraf (Boşluk veya Menü) */}
          <div className="flex-1 w-full max-w-[90%] lg:max-w-[600px]">
              <Greeting />
              <ButtonsHero />
          </div>

          {/* İkinci Div: Sağdaki Ek Div */}
          <div className="w-[200px] h-full border border-gray-300 rounded-lg shadow-md">
              <HumanDNAScene />
          </div>

          {/* Sağ Taraf (Hero ve 3D Model) */}
          <div className="flex-1 max-w-[400px] flex justify-end">
            <TurtleScene />
          </div>
      </div>
    </section>

  );
};
