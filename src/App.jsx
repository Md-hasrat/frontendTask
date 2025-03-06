

import './App.css'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify';

function App() {


  return (
    <>
    <div className='container'>
    <Home/>
    

    </div>
    <ToastContainer style={{fontSize:"15px"}}/>
    </>
  )
}
export default App
