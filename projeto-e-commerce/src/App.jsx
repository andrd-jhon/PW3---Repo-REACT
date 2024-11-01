import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'
import Lancamentos from './pages/Lancamentos'
import Cadastro from './pages/Cadastro'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const api = axios.create ({
  baseURL: 'http://localhost:3001'
})


function App() {
  // const [count, setCount] = useState(0)




  api.get('/produtos').then((response) => {
    console.log(response)
  })
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Lancamentos" element={<Lancamentos />} />
            <Route path="/Cadastro" element={<Cadastro/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
