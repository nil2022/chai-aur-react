import { useState } from "react"


function App() {

  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-700 transition-all "
    style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
        {/* RED button */}
          <button 
          onClick={() => setColor('red') }
          className="outline-none px-4 py-1 rounded-full text-white border-2 border-black shadow-3xl hover:scale-110 hover:transition-all hover:duration-700" 
          style={{ backgroundColor: 'red' }}
          >Red</button>
          {/* GREEN button */}
          <button 
          onClick={() => setColor('green') }
          className="outline-none px-4 py-1 rounded-full text-white border-2 border-black shadow-3xl
          hover:scale-110 hover:transition-all hover:duration-700"
          style={{ backgroundColor: 'green' }}
          >Green</button>
          {/* BLUE button */}
          <button 
          onClick={() => setColor('blue') }
          className="outline-none px-4 py-1 rounded-full text-white border-2 border-black shadow-3xl
          hover:scale-110 hover:transition-all hover:duration-700"
          style={{ backgroundColor: 'blue' }}
          >Blue</button>
          {/* OLIVE button */}
          <button 
          onClick={() => setColor('olive') }
          className="outline-none px-4 py-1 rounded-full text-white border-2 border-black shadow-3xl
          hover:scale-110 hover:transition-all hover:duration-700"
          style={{ backgroundColor: 'olive' }}
          >Olive</button>
          {/* WHITE button */}
          <button 
          onClick={() => setColor('white') }
          className="outline-none px-4 py-1 rounded-full text-black border-2 border-black shadow-3xl
          hover:scale-110 hover:transition-all hover:duration-700"
          style={{ backgroundColor: 'white' }}
          >White</button>
        </div>
      </div>
    </div>
  )
}

export default App
