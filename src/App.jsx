import { useState } from 'react'
import TopHeadlines from './components/topHeadlines'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    
      <TopHeadlines />
    </div>
  )
}

export default App
