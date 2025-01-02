import React from 'react';

const FontSecond = () => {
  return (
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Delius+Unicase:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        /* PT Sans Font Styles */
        .font-pt-sans-regular {
          font-family: "PT Sans", serif;
          font-weight: 400;
          font-style: normal;
        }
        .font-pt-sans-bold {
          font-family: "PT Sans", serif;
          font-weight: 700;
          font-style: normal;
        }
        .font-pt-sans-italic {
          font-family: "PT Sans", serif;
          font-weight: 400;
          font-style: italic;
        }

        /* Delius Unicase Font Styles */
        .font-delius-unicase-regular {
          font-family: "Delius Unicase", serif;
          font-weight: 400;
          font-style: normal;
        }
        .font-delius-unicase-bold {
          font-family: "Delius Unicase", serif;
          font-weight: 700;
          font-style: normal;
        }
      `}
    </style>
  );
};

export default FontSecond;
