import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Producte from './components/pages/Producte';
import DetaileProduct from './components/pages/DetaileProduct'
import Recherche from './components/pages/Recherche';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <Producte/> */}
      {/* <DetaileProduct/> */}
      <Recherche/>
    </>
  );
}

export default App;
