import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import React from 'react';

const Player = () => {
  return (
    <div
      className='fixed bottom-0 left-1/2 -translate-x-1/2 w-[40rem]
      bg-[#171717] p-4 flex items-center justify-between text-white shadow-lg z-50 rounded-t-lg'
    >
      {/* Thumbnail */}
      <div className='w-16 h-16 bg-gray-700 rounded-md flex-shrink-0'></div>

      {/* Controls */}
      <div className='flex items-center gap-6 flex-shrink-0'>
        <SkipBack
          size={24}
          className='cursor-pointer hover:text-white transition-colors text-gray-400'
        />

        <Play
          size={24}
          className='cursor-pointer hover:text-white transition-colors text-white'
        />

        {/* Only show Pause if needed; hide by default */}
        <Pause
          size={24}
          className='cursor-pointer hover:text-white transition-colors text-white hidden'
        />

        <SkipForward
          size={24}
          className='cursor-pointer hover:text-white transition-colors text-gray-400'
        />
      </div>

      {/* Progress Bar */}
      <div className='flex items-center gap-4 text-gray-400 w-[50%]'>
        <span className='text-sm'>2:21</span>

        <div className='relative w-full h-1 bg-gray-700 rounded-md'>
          <div
            className='absolute top-0 left-0 h-1 bg-white rounded-md'
            style={{ width: '50%' }}
          ></div>

          <input
            type='range'
            className='absolute top-0 left-0 w-full h-1 opacity-0 cursor-pointer'
          />
        </div>

        <span className='text-sm'>3:21</span>
      </div>
    </div>
  );
};

export default Player;
