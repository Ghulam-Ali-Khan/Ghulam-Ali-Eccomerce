import React,{useEffect} from 'react';
import Header from './components/Header';
// import SliderCraousal from './components/SliderCraousal';
import Test1 from './test/Test1';
import Home from './pages/Home';
import './css/style.css';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {



  return (
    <div>
    
      <Header2/>
      

<Home/>


<Footer/>
    </div>
  )
}

export default App;
