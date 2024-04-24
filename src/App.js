import './App.css';
import SvgWrapper from './components/svgWrapper';
import Navbar from './components/navbar';
import Preloader from './components/preloader';
import Panels from './components/panels';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Rnd } from 'react-rnd';

  
function App() {
  return (
    <div className="App">
    {/*<Navbar />*/}
    <SvgWrapper />
    {/*<Preloader />*/}
    {/*<Panels />*/}
    </div>
  );
}

export default App;
