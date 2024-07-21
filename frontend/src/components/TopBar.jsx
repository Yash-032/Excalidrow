import React, { useState, useEffect } from 'react';

export const TopBar = ({ selectedIcon, setSelectedIcon, setCircleCreated, setArrowCreated, setRectangleCreated, setLineCreated, setTriangleCreated }) => {
  
  const icons = [
    { id: 1, jsx: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path fillRule="evenodd" d="M5.25 6.31v9.44a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75h11.25a.75.75 0 0 1 0 1.5H6.31l13.72 13.72a.75.75 0 1 1-1.06 1.06L5.25 6.31Z" clipRule="evenodd" />
    </svg>    
    ) }, 
    { id: 2, jsx: (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none" 
      strokeWidth={1.}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
      />
    </svg>
    
    ) },
    { id: 3, jsx: (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-5 h-4"
    >
      <g
        style={{
          stroke: 'none',
          strokeWidth: 0,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'none',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="translate(1.407 1.407) scale(2.81 2.81)"
      >
        <path
          d="M 90 82.471 H 0 L 45 4.529 L 90 82.471 z M 9.909 76.75 h 70.182 L 45 15.971 L 9.909 76.75 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: 'rgb(0,0,0)',
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
      </g>
    </svg>) },
    { id: 4, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-4">
      <circle cx="12" cy="12" r="10" />
    </svg>) },
    { id: 5, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
      ) },
    { id: 6, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
    ) },
    { id: 7, jsx: (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-5 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M16.862 4.487l2.65 2.65-12.4 12.4-3.225.358a1.125 1.125 0 01-1.259-1.26l.358-3.224 12.4-12.4 1.476 1.476z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.25 6.75L17.25 12.75"
      />
    </svg>) }, 
    { id: 8, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
    </svg>
    
    ) },
    { id: 9, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-5 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
    ) }, 
    { id: 0, jsx: ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M10.85597,20 L11.1558049,20 C11.5909491,19.9657654 12.0165519,19.7822288 12.3493903,19.4493903 L13.0458369,18.7529437 L5.25294373,10.9600505 L4.55649712,11.6564971 C3.81450096,12.3984933 3.81450096,13.6015067 4.55649712,14.3435029 L9.66238457,19.4493903 C9.99522304,19.7822288 10.4208258,19.9657654 10.8559701,20 Z M13.2129942,20 L18.5,20 C18.7761424,20 19,20.2238576 19,20.5 C19,20.7761424 18.7761424,21 18.5,21 L11.1911564,21 C11.0677787,21.0078499 10.9439962,21.0078499 10.8206199,21 L5.5,21 C5.22385763,21 5,20.7761424 5,20.5 C5,20.2238576 5.22385763,20 5.5,20 L8.79878067,20 L3.84939033,15.0506097 C2.71686989,13.9180892 2.71686989,12.0819108 3.84939033,10.9493903 L10.9552778,3.84350288 C12.0877982,2.71098244 13.9239767,2.71098244 15.0564971,3.84350288 L20.1623846,8.94939033 C21.294905,10.0819108 21.294905,11.9180892 20.1623846,13.0506097 L13.2129942,20 Z M5.96005051,10.2529437 L13.7529437,18.0458369 L19.4552778,12.3435029 C20.1972739,11.6015067 20.1972739,10.3984933 19.4552778,9.65649712 L14.3493903,4.55060967 C13.6073942,3.80861351 12.4043807,3.80861351 11.6623846,4.55060967 L5.96005051,10.2529437 Z" />
    </svg>) }
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key >= '0' && key <= '9') {
        setSelectedIcon(parseInt(key));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setSelectedIcon]);

  return (
    <div className="flex justify-center">
      <div className="bg-white border-1 rounded-lg py-1 px-1 shadow w-84 h-13">
        <div className="flex space-x-1">
          {icons.map((icon) => (
            <button
              key={icon.id}
              onClick={() => {
                setSelectedIcon(icon.id)
                if(selectedIcon === 2) setRectangleCreated(true)
                else if(selectedIcon === 3) setTriangleCreated(true);
                else if(selectedIcon === 4)  setCircleCreated(true)
                else if(selectedIcon === 5) setArrowCreated(true)
                else if(selectedIcon === 6) setLineCreated(true) 
              }}
              className={`icon p-3 cursor-pointer hover:bg-purple-100 hover:rounded-md hover:border-r  ${selectedIcon === icon.id ? 'bg-purple-200 rounded-md border-r ' : ''}`}
            >
              <span className="relative">
                {icon.jsx}
                <sub className="absolute text-xs -bottom-2 -right-2 text-gray-400">
                  {icon.id}
                </sub>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};