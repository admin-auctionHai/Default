import React from 'react';

const MainContainerDramatic = ({ children }) => {
  return (
    <main 
      className="flex-grow mx-auto pb-4 bg-cover bg-center bg-no-repeat min-h-screen relative overflow-hidden"
      style={{
        background: `
          linear-gradient(
            45deg,
            #000 0%,
            #8B4513 25%,
            #D4AF37 50%,
            #8B4513 75%,
            #000 100%
          )
        `,
        backgroundSize: '200% 200%',
        animation: 'gradientAnimation 15s ease infinite'
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
        `}
      </style>
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
};

export default MainContainerDramatic;