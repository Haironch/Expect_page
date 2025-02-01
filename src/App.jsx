import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  return (
    // Usando gradiente, min-height y flex para centrar todo el contenido
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-8">
      
      {/* Container principal con efecto glassmorphism */}
      <div className="container max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        
        {/* Logos con grid y efectos hover */}
        <div className="grid grid-cols-2 gap-8 justify-items-center mb-12">
          <a 
            href="https://vite.dev" 
            target="_blank"
            className="transform hover:scale-110 transition-all duration-300 hover:rotate-6"
          >
            <img src={viteLogo} className="h-32 drop-shadow-lg" alt="Vite logo" />
          </a>
          <a 
            href="https://react.dev" 
            target="_blank"
            className="transform hover:scale-110 transition-all duration-300 hover:-rotate-6"
          >
            <img src={reactLogo} className="h-32 animate-spin-slow drop-shadow-lg" alt="React logo" />
          </a>
        </div>
        
        {/* Título con efectos de texto */}
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          Vite + React
        </h1>
        
        {/* Card del contador con efectos hover */}
        <div className="max-w-md mx-auto bg-white/20 rounded-xl p-8 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
          <button 
            onClick={() => setCount((count) => count + 1)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-lg mb-6 transition-all duration-300 transform hover:shadow-lg"
          >
            <span className="flex items-center justify-center gap-2">
              <span className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                count is {count}
              </span>
            </span>
          </button>
          
          <p className="text-gray-200 text-center">
            Edit <code className="bg-black/30 px-2 py-1 rounded font-mono">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        {/* Footer con hover states */}
        <p className="text-center mt-12 text-gray-400 hover:text-white transition-colors duration-300">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App