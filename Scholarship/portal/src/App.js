import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Login from './pages/login';
import SignUp from './pages/signUp';
import Dashboard from "./pages/dashboard"
function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>

   </Routes> 
  );
}

export default App;
