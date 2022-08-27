
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AppRegister from './Components/Application/AppRegister';
import Register from './Pages/Register/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
<Router>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/application' element={<AppRegister/>} />
    <Route path='/admin' element={<Dashboard/>} />
    {/* <Route path='/company' element={<Home/>} />
    <Route path='/slot/:id' element={<Home/>} /> */}
  </Routes>

</Router>

    </div>
    
  );
}

export default App;
