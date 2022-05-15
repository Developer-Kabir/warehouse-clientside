
import './App.css';
import Header from './Componennts/Shared Components/Header/Header';
import Home from './Componennts/Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componennts/Shared Components/Footer/Footer';
import Login from './Componennts/User/Login/Login';
import { Route, Routes } from 'react-router-dom';
import About from './Componennts/Pages/About/About';
import SignUp from './Componennts/User/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>  
     <Routes>
       <Route path='home' element={<Home></Home>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='login'  element={<Login></Login>}></Route>
       <Route path='about'  element={<About></About>}></Route>
       <Route path='signUp'  element={<SignUp></SignUp>}></Route>

     </Routes>
     <Footer></Footer>
  </div>
  );
}

export default App;
