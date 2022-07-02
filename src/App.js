
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Header from './components/Header';
import Menu from './components/Menu';
import Register from './pages/Register';
import Detail from './pages/Detail';
import Footer from './components/Footer';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetailPage';


function App() {


  return (

    <div className='container'>

      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/ProductDetailPage' element={<ProductDetail/>}/>
        </Routes>
       <Footer/>
      </BrowserRouter>
    </div>



  )
}

export default App;

