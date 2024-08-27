import './App.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Watches from './components/watches.js';
import SvgWrapper from './components/svgWrapper';
import Navbar from './components/navbar.js';


  
function App() {
  return (
    <div className="App">
    <Navbar />
    <SvgWrapper />
    <Watches />
</div>
  );
}

export default App;
