import './App.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Watches from './components/watches.js';
import SvgWrapper from './components/svgWrapper';


  
function App() {
  return (
    <div className="App">
    <SvgWrapper />
    <Watches />


</div>
  );
}

export default App;
