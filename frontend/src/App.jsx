import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopBar } from './components/TopBar'
import { StickyFooter } from './components/StickyFooter'

export const App = () => {
  const [count, setCount] = useState(0)
  const middleRef = useRef(null);
  
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white-300 p-4">
        <TopBar />
      </div>
      <div id = "middle" ref={middleRef} className="bg-white-300 p-4 flex-grow">
        Middle Div
      </div>
      <div className="bg-white-300 p-4 flex-shrink-0">
        <StickyFooter middleRef={middleRef}/>
      </div>
    </div>
  );
}

export default App
