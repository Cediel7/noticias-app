import { useState } from 'react'
import TopHeadlines from './components/topHeadlines'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopHeadlines />
    </>
  )
}

export default App
