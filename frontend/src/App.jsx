import { useRef, useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { StickyFooter } from './components/StickyFooter';

export const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null); 
  const [circleCreated, setCircleCreated] = useState(false);
  const [arrowcCreated, setArrowCreated] = useState(false)
  const [rectangleCreated, setRectangleCreated] = useState(false)
  const [lineCreated, setLineCreated] = useState(false)
  const middleRef = useRef(null);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const circleRef = useRef(null);
  const arrowRef = useRef(null);
  const rectangleRef = useRef(null);
  const lineRef = useRef(null);

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
    if(rectangleCreated && selectedIcon === 2){
      if(stageRef.current && layerRef.current){
        const rectangle = new Konva.Rect({
          x: (innerWidth - 200)/2,
          y: (innerHeight - 100)/2,
          width: 500,
          height: 400,
          fill: 'transparent',
          stroke: 'black',
          strokeWidth: 2,
          draggable: true,
          cornerRadius: 10,
        })
        layerRef.current.add(rectangle)
        layerRef.current.draw()
        rectangleRef.current = rectangle
        setRectangleCreated(false)
      }
    }
    if (circleCreated && selectedIcon === 4) {
      if (stageRef.current && layerRef.current) {
        const circle = new Konva.Circle({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          radius: 140,
          fill: 'transparent',
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
    if(arrowcCreated && selectedIcon === 5){
      if(stageRef.current && layerRef.current){
        const arrow = new Konva.Arrow({
          points: [50,100,200,100],
          pointerLength: 15,
          pointerWidth: 15,
          fill: 'black',
          stroke: 'black',
          strokeWidth: 2,
          draggable: true,
        })
        layerRef.current.add(arrow)
        layerRef.current.draw()
        arrowRef.current = arrow
        setArrowCreated(false)
      }
    }
    if(lineCreated && selectedIcon === 6){
      if(stageRef.current && layerRef.current){
        const line = new Konva.Line({
          points: [50, 100, 200, 100],
          stroke: 'black',
          strokeWidth: 2,
          lineCap: 'round',
          lineJoin: 'round',
          draggable: true,
        })
        layerRef.current.add(line)
        layerRef.current.draw()
        lineRef.current = line
        setLineCreated(false)
      }
    }
  }, [circleCreated, selectedIcon, arrowcCreated, rectangleCreated, lineCreated]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key >= '0' && key <= '9') {
        const id = parseInt(key);
        setSelectedIcon(id);

        if(id === 2){
          setRectangleCreated(true)
        }
        else if (id === 4) {
          setCircleCreated(true);
        }
        else if(id === 5){
          setArrowCreated(true)
        }
        else if(selectedIcon === 6){
          setLineCreated(true)
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
        <TopBar selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} setCircleCreated={setCircleCreated} setArrowCreated={setArrowCreated} setRectangleCreated={setRectangleCreated} setLineCreated={setLineCreated}/>
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
