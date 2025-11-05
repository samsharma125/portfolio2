import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Neon Rotating Rings */}
        <div className="relative w-58 h-58"> {/* increased from w-24 h-24 */}
          <div className="absolute inset-0 rounded-full border-8 border-cyan-400 opacity-40 animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full border-8 border-purple-500 opacity-50 animate-spin-reverse"></div>
          <div className="absolute inset-8 rounded-full border-8 border-pink-500 opacity-60 animate-spin-fast"></div>

          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-mono">
            {progress.toFixed(0)}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-xl font-mono tracking-widest">
          INITIALIZING...
        </div>
      </div>

      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spin-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          @keyframes spin-fast {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(720deg); }
          }
          .animate-spin-slow { animation: spin-slow 4s linear infinite; }
          .animate-spin-reverse { animation: spin-reverse 3s linear infinite; }
          .animate-spin-fast { animation: spin-fast 2s linear infinite; }
        `}
      </style>
    </Html>
  );
};

export default Loader;
