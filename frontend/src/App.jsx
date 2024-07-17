import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopBar } from './components/TopBar'
import { StickyFooter } from './components/StickyFooter'

export const App = () => {
  const [count, setCount] = useState(0)
  const middleRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/konvajs/konva@1.2.2/konva.min.js';
    script.async = true;
    script.onload = () => {
      const stage = new Konva.Stage({
        container: 'middle',
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const layer = new Konva.Layer();
      stage.add(layer);

      const circle = new Konva.Circle({
        x: window.innerWidth/2,
        y: window.innerHeight/2,
        radius: 70,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
        draggable: true,
      });

      layer.add(circle);
      layer.draw();
    };
    document.body.appendChild(script);
  }, []);
  
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white-300 p-4">
        <TopBar />
      </div>
      <div id = "middle" ref={middleRef} className="bg-white-300 p-4 flex-grow">
      </div>
      <div className="bg-white-300 p-4 flex-shrink-0">
        <StickyFooter middleRef={middleRef}/>
      </div>
    </div>
  );
}

export default App
