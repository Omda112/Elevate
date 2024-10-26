import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=" text-yellow-400 text-7xl font-bold underline mb-10">
      Welcome...!
      </h1>
      <Products/>
    </>
    

  )
}

export default App
