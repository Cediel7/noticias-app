import { useState } from 'react'
//@ts-ignore
import TopHeadlines from './components/TopHeadlines'
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
