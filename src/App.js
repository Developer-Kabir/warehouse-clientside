import './App.css';
import Header from './Componennts/Shared Components/Header/Header';
import Home from './Componennts/Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componennts/Shared Components/Footer/Footer';
import Login from './Componennts/User/Login/Login';
import { Route, Routes } from 'react-router-dom';
import About from './Componennts/Pages/About/About';
import SignUp from './Componennts/User/SignUp/SignUp';
import Contact from './Componennts/Pages/Contact/Contact';
import Blog from './Componennts/Pages/Blog/Blog';
import Cars from './Componennts/Pages/Cars/Cars'
import MyItem from './Componennts/Pages/MyItem/MyItem';
import Manageitem from './Componennts/Pages/Manageitem/Manageitem';
import AddItem from './Componennts/Pages/AddItem/AddItem';
import CarDetail from './Componennts/Pages/CarDetail/CarDetail';

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
       <Route path='contact'  element={<Contact></Contact>}></Route>
       <Route path='blog' element={<Blog></Blog>} ></Route>
       <Route path='cars' element={<Cars></Cars>}></Route>
       <Route path='myitem' element={<MyItem></MyItem>}></Route>
       <Route path="/manage" element={<Manageitem></Manageitem>}></Route>
       <Route path='additem' element={<AddItem></AddItem>}></Route>

       <Route path='/car/:carId' element={<CarDetail></CarDetail>}></Route>
  
     </Routes>
     <Footer></Footer>
  </div>
  );
}

export default App;
