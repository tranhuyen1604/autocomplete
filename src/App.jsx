import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Autocomplete from './components/Autocomplete/Autocomplete'
import SearchBar from './components/EnhancedAutocomplete/EnhancedAutocomplete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* <Home /> */}
      <Autocomplete />
      <SearchBar />
    </div>
  )
}

export default App
