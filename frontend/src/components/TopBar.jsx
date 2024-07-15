import React, { useState, useEffect } from 'react';

export const TopBar = () => {
  const [selectedIcon, setSelectedIcon] = useState(1);

  const icons = [
    { id: 1, jsx: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
    </svg>
    ) }, // Up Arrow
    { id: 2, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
    </svg>
    ) }, // Square
    { id: 3, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l5.5 9.5H6.5L12 2z" /></svg>) }, // Diamond
    { id: 4, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" />
    </svg>) }, // Circle
    { id: 5, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
      ) }, // Right Arrow
    { id: 6, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
    ) }, // Minus
    { id: 7, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.862 4.487l2.65 2.65-12.4 12.4-3.225.358a1.125 1.125 0 01-1.259-1.26l.358-3.224 12.4-12.4 1.476 1.476z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.25 6.75L17.25 12.75" /></svg>) }, // Pencil
    { id: 8, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
    </svg>
    ) }, // Academic Cap
    { id: 9, jsx: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
    ) }, // Photograph
    { id: 0, jsx: ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M10.85597,20 L11.1558049,20 C11.5909491,19.9657654 12.0165519,19.7822288 12.3493903,19.4493903 L13.0458369,18.7529437 L5.25294373,10.9600505 L4.55649712,11.6564971 C3.81450096,12.3984933 3.81450096,13.6015067 4.55649712,14.3435029 L9.66238457,19.4493903 C9.99522304,19.7822288 10.4208258,19.9657654 10.8559701,20 Z M13.2129942,20 L18.5,20 C18.7761424,20 19,20.2238576 19,20.5 C19,20.7761424 18.7761424,21 18.5,21 L11.1911564,21 C11.0677787,21.0078499 10.9439962,21.0078499 10.8206199,21 L5.5,21 C5.22385763,21 5,20.7761424 5,20.5 C5,20.2238576 5.22385763,20 5.5,20 L8.79878067,20 L3.84939033,15.0506097 C2.71686989,13.9180892 2.71686989,12.0819108 3.84939033,10.9493903 L10.9552778,3.84350288 C12.0877982,2.71098244 13.9239767,2.71098244 15.0564971,3.84350288 L20.1623846,8.94939033 C21.294905,10.0819108 21.294905,11.9180892 20.1623846,13.0506097 L13.2129942,20 Z M5.96005051,10.2529437 L13.7529437,18.0458369 L19.4552778,12.3435029 C20.1972739,11.6015067 20.1972739,10.3984933 19.4552778,9.65649712 L14.3493903,4.55060967 C13.6073942,3.80861351 12.4043807,3.80861351 11.6623846,4.55060967 L5.96005051,10.2529437 Z" />
    </svg>) } // Star
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
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-white border-1 rounded-lg p-4 shadow w-84 h-16">
        <div className="flex space-x-2">
          {icons.map((icon) => (
            <button
              key={icon.id}
              onClick={() => setSelectedIcon(icon.id)}
              className={`icon p-2 cursor-pointer  ${selectedIcon === icon.id ? 'bg-gray-200 rounded border-r' : ''}`}
            >
              {icon.jsx}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

