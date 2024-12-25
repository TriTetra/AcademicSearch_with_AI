
// `Html` ve `useProgress` React Three Fiber'ın Drei eklentisinden geliyor.
// `Html`: 3D sahne üzerine HTML tabanlı içerik eklemenizi sağlar.
// `useProgress`: Yükleme sürecini takip etmek için kullanılır.

import { Html, useProgress } from '@react-three/drei';

// `CanvasLoader` bileşeni, yükleme sırasında kullanıcıya bir geri bildirim (loading indicator) gösterir.
const CanvasLoader = () => {
    // `useProgress` ile yükleme durumunu takip ediyoruz.
    // `progress`: Yükleme ilerlemesini yüzdesel bir değer (0-100 arasında) olarak döner.
  const { progress } = useProgress();
    
  return (
    // `Html` bileşeni, 3D sahne üzerinde HTML içeriği göstermek için kullanılır.
    <Html
      center // İçeriği 3D sahne merkezine yerleştirir.
      style={{
        display: 'flex',            // CSS flexbox kullanarak içerikleri hizalar.
        justifyContent: 'center',   // İçerikleri yatayda ortalar.
        alignItems: 'center',       // İçerikleri dikeyde ortalar.
        flexDirection: 'column',    // İçerikleri dikey bir sütun olarak hizalar.
      }}
    >

      {/* Yükleniyor animasyonu için bir span elementi. */}
      {/* CSS ile bu span'a bir animasyon verilmelidir. */}

      <span className="canvas-loader" />

       {/* Yüklenme ilerleme yüzdesini veya "Loading..." metnini gösteren bir paragraf. */}
      <p style={{ 
            fontSize: 14,           // Yazı boyutu.
            color: '#000000',       // Yazı rengi.
            fontWeight: 800,        // Yazı kalınlığı.
            marginTop: 40           // Üst kenardan 40px boşluk bırakır.
            }} 
        >  

        {/* Eğer progress sıfırdan büyükse, yüzdesel değeri göster. Aksi takdirde "Loading..." yazısını göster. */}     
        {progress !== 0 ? `${progress.toFixed(2)}%` : `Loading...`}
      </p>
    </Html>
  );
};


export default CanvasLoader;
