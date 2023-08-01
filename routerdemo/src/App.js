import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import {Navbar} from './components/Navbar'
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Product';
import NewProduct from './components/NewProduct';
import FeaturedProduct from './components/FeaturedProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin'



function App() {
  return (
    <>
    <Navbar />
   <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/ordersummary' element={<OrderSummary/>}></Route>
      <Route path='/*' element={<NoMatch/>}></Route>
      <Route path='products' element={<Products />}>     

      <Route index element={<FeaturedProduct />}/> 
      <Route path="featured" element={<FeaturedProduct/>}></Route>
      <Route path="NewProducts" element={<NewProduct/>}></Route>
      </Route>
      <Route path='users' element={< Users/>} >

      <Route path=":userId" element={<UserDetails/>}></Route>
      <Route path="admin" element={<Admin/>}></Route>
      </Route>


    </Routes>
    </>
  );
}

export default App;
