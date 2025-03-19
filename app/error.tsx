'use client';

import React from 'react';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {


  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
            <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">500</p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Server Error</p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
              El servidor se tomó un descanso para un buen afeitado, volvemos más limpios y precisos en breve.
            </p>

        </div>
        <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
            <img src="/images/error.png" alt="Error Image" className="max-w-full max-h-full" />
        </div>
    </div>
  );
}
