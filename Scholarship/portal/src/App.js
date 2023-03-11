import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Login from './pages/login';
import SignUp from './pages/signUp';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<SignUp/>}/>


   </Routes> 
  );
}

export default App;
