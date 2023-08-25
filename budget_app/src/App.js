
import './App.css';
import Home from './components/Home/Home';
import { Route,Routes } from 'react-router-dom'
import Budget from './components/Home/budget/Budget';
import Navbar from './components/Navbar';




function App() {
  return (
    <>
    <div className='a'>
  <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Budget' element={<Budget/>}></Route>
 </Routes>
 </div>
 </>
  );
}

export default App;