import './App.css';
import Navbar from './components/navbar';
import Preloader from './components/preloader';
import Panels from './components/panels';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Rnd } from 'react-rnd';
import Watches from './components/watches.js';
import SvgWrapper from './components/svgWrapper';


  
function App() {
  return (
    <div className="App">
    {/*<Navbar />*/}
    <SvgWrapper />
    <Watches />
    {/*<Preloader />*/}
    {/*   <Panels /> */}    
</div>
  );
}

export default App;
