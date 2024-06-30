import { useState } from 'react'
import Router from './router'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { newsSlice } from './api/newsSlice'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApiProvider api={newsSlice}>
      <Router />
    </ApiProvider>
  )
}

export default App
