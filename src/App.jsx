import React, {useState} from 'react'
import MovieDemo from './Movie'
import List from './components/List'
import Form from './components/Form'
import Banner from './components/Banner'
import './App.css'

function App() {
  const [theme, setThem] =useState('dark');

  const colorButton= ()=>{
    setThem(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <div className={theme}>
    <MovieDemo>
      <button onClick={colorButton}>{theme === 'dark'? 'light' : 'dark'}</button>
    <Form/>
    <Banner/>
    <List/>
    
    </MovieDemo>
     </div>
  )
}

export default App