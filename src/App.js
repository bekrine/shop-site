import './App.css';
import Home from './components/pages/Home';
import ShopeCard from './components/pages/ShopeCard';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Producte from './components/pages/Producte';
import DetaileProduct from './components/pages/DetaileProduct'
import Recherche from './components/pages/Recherche';
function App() {
  return (
    <>
    
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:type' element={<Producte/>} />
      <Route path='/detailProduct/:id' element={<DetaileProduct/>}/>
      <Route path='recherch' element={<Recherche/>}/>
      </Routes>
      <ShopeCard/>
   
    </>
  );
}

export default App;
