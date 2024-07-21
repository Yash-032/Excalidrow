import { useRef, useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { StickyFooter } from './components/StickyFooter';
import Konva from 'konva';

export const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null); 
  const [circleCreated, setCircleCreated] = useState(false);
  const [arrowCreated, setArrowCreated] = useState(false);
  const [rectangleCreated, setRectangleCreated] = useState(false);
  const [lineCreated, setLineCreated] = useState(false);
  const [selectedShape, setSelectedShape] = useState(null);
  const [triangleCreated, setTriangleCreated] = useState(null);
  const middleRef = useRef(null);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const transformerRef = useRef(null);

  useEffect(() => {
    const stage = new Konva.Stage({
      container: middleRef.current,
      width: window.innerWidth,
      height: window.innerHeight - 100,
    });
    stageRef.current = stage;

    const layer = new Konva.Layer();
    stage.add(layer);
    layerRef.current = layer;

    const transformer = new Konva.Transformer({
      ignoreStroke: true,
    });
    layer.add(transformer);
    transformerRef.current = transformer;
  }, []);

  const addTransformer = (shape) => {
    const transformer = transformerRef.current;
    if (transformer) {
      transformer.nodes([shape]);
      transformer.getLayer().batchDraw();
      shape.on('transform', () => {
        if (shape.className === 'Rect' || shape.className === 'Circle') {
          shape.setAttrs({
            width: shape.width() * shape.scaleX(),
            height: shape.height() * shape.scaleY(),
            scaleX: 1,
            scaleY: 1,
          });
        } else if (shape.className === 'Arrow' || shape.className === 'Line') {
          const scaleX = shape.scaleX();
          const scaleY = shape.scaleY();
          shape.points(shape.points().map((point, index) => 
            index % 2 === 0 ? point * scaleX : point * scaleY
          ));
          shape.setAttrs({
            scaleX: 1,
            scaleY: 1,
          });
        }
      });
    }
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    stage.on('click tap', (e) => {
      if (e.target === stage) {
        setSelectedShape(null);
        transformerRef.current.nodes([]);
        return;
      }
      setSelectedShape(e.target);
      addTransformer(e.target);
    });
  }, []);

  useEffect(() => {
    if (rectangleCreated && selectedIcon === 2) {
      if (stageRef.current && layerRef.current) {
        const rectangle = new Konva.Rect({
          x: (window.innerWidth - 200) / 2,
          y: (window.innerHeight - 100) / 2,
          width: 100,
          height: 75,
          fill: 'transparent',
          stroke: 'black',
          strokeWidth: 1,
          draggable: true,
          cornerRadius: 10,
        });
        layerRef.current.add(rectangle);
        layerRef.current.draw();
        setSelectedShape(rectangle);
        addTransformer(rectangle);
        setRectangleCreated(false);
      }
    }
    if(triangleCreated && selectedIcon === 3){
      if(stageRef.current && layerRef.current){
        const triangle = new Konva.Line({
          points:[
            window.innerWidth / 2, window.innerHeight / 2 - 70,
            window.innerWidth / 2 - 70, window.innerHeight / 2 + 70,
            window.innerWidth / 2 + 70, window.innerHeight / 2 +70
          ],
          fill: 'transparent',
          stroke: 'black',
          strokeWidth: 1,
          closed: true,
          draggable: true
        })
        layerRef.current.add(triangle);
        layerRef.current.draw();
        setSelectedShape(triangle);
        addTransformer(triangle);
        setTriangleCreated(false);
      }
    }
    if (circleCreated && selectedIcon === 4) {
      if (stageRef.current && layerRef.current) {
        const circle = new Konva.Circle({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          radius: 70,
          fill: 'transparent',
          stroke: 'black',
          strokeWidth: 1,
          draggable: true,
        });
        layerRef.current.add(circle);
        layerRef.current.draw();
        setSelectedShape(circle);
        addTransformer(circle);
        setCircleCreated(false);
      }
    }
    if (arrowCreated && selectedIcon === 5) {
      if (stageRef.current && layerRef.current) {
        const arrow = new Konva.Arrow({
          points: [50, 100, 200, 100],
          pointerLength: 15,
          pointerWidth: 15,
          fill: 'black',
          stroke: 'black',
          strokeWidth: 1,
          draggable: true,
        });
        layerRef.current.add(arrow);
        layerRef.current.draw();
        setSelectedShape(arrow);
        addTransformer(arrow);
        setArrowCreated(false);
      }
    }
    if (lineCreated && selectedIcon === 6) {
      if (stageRef.current && layerRef.current) {
        const line = new Konva.Line({
          points: [50, 100, 200, 100],
          stroke: 'black',
          strokeWidth: 1,
          lineCap: 'round',
          lineJoin: 'round',
          draggable: true,
        });
        layerRef.current.add(line);
        layerRef.current.draw();
        setSelectedShape(line);
        addTransformer(line);
        setLineCreated(false);
      }
    }
  }, [circleCreated, selectedIcon, arrowCreated, rectangleCreated, lineCreated]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key >= '0' && key <= '9') {
        const id = parseInt(key);
        setSelectedIcon(id);

        if (id === 2) {
          setRectangleCreated(true);
        }
        else if(id === 3){
          setTriangleCreated(true);
        } 
        else if (id === 4) {
          setCircleCreated(true);
        }
        else if (id === 5) {
          setArrowCreated(true);
        }
        else if (id === 6) {
          setLineCreated(true);
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
      <div className="bg-white p-4">
        <TopBar selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} setCircleCreated={setCircleCreated} setArrowCreated={setArrowCreated} setRectangleCreated={setRectangleCreated} setLineCreated={setLineCreated} setTriangleCreated={setTriangleCreated}/>
      </div>
      <div id="middle" ref={middleRef} className="bg-white-100 flex-grow"></div>
      <div className="bg-white p-4 flex-shrink-0">
        <StickyFooter middleRef={middleRef} />
      </div>
    </div>
  );
};

export default App;
