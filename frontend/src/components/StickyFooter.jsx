import React, { useRef, useState, useEffect } from 'react';

export const StickyFooter = ({ middleRef }) => {
  const [scale, setScale] = useState(1);
  const [initial, setInitial] = useState(100);

  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 5));
    setInitial((prevInitial) => prevInitial + 10);
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
    setInitial((prevInitial) => prevInitial - 10);
  };

  useEffect(() => {
    if (middleRef.current) {
      middleRef.current.style.transform = `scale(${scale})`;
      middleRef.current.style.transformOrigin = 'top center';
    }
  }, [scale, middleRef]);

  return (
    <footer className="fixed bottom-0 bg-white-200 py-3 flex justify-between">
        <div className="shadow border rounded-md flex justify-between bg-purple-100">
            <button onClick={zoomOut} className="bg-white-500 text-black px-5 py-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
            </button>
            <button className='px-1 py-2 text-xs' onClick={() =>{
              setScale(1)
              setInitial(100);
            }}>{initial} %</button>
            <button onClick={zoomIn} className="bg-white-500 text-black px-4 py-2 rounded mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
        {/* <div>
            <button>

            </button>
            <button className='b'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </button>
        </div> */}

    </footer>
  );
};