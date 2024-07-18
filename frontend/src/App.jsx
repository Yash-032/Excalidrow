import { useRef, useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { StickyFooter } from './components/StickyFooter';

export const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null); 
  const [circleCreated, setCircleCreated] = useState(false);
  const middleRef = useRef(null);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const circleRef = useRef(null);

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
      stageRef.current = stage;

      const layer = new Konva.Layer();
      stage.add(layer);
      layerRef.current = layer;
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (circleCreated && selectedIcon === 4) {
      if (stageRef.current && layerRef.current) {
        const circle = new Konva.Circle({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          radius: 140,
          fill: 'white',
          stroke: 'black',
          strokeWidth: 2,
          draggable: true,
        });

        layerRef.current.add(circle);
        layerRef.current.draw();

        circleRef.current = circle;
        setCircleCreated(false)
      }
    }
  }, [circleCreated, selectedIcon]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key >= '0' && key <= '9') {
        const id = parseInt(key);
        setSelectedIcon(id);

        if (id === 4) {
          setCircleCreated(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white-300 p-4">
        <TopBar selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
      </div>
      <div id="middle" ref={middleRef} className="bg-white-300 p-4 flex-grow">
      </div>
      <div className="bg-white-300 p-4 flex-shrink-0">
        <StickyFooter middleRef={middleRef}/>
      </div>
    </div>
  );
};

export default App;
