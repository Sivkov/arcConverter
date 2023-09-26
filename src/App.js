import './App.css';
import SvgWrapper from './components/svgWrapper';
import Navbar from './components/navbar';
import Panels from './components/panels';
import Circle from './components/circle';




function App() {
  return (
    <div className="App">
         <Navbar />
         <SvgWrapper />
         <Panels />
      </div>
  );
}

export default App;
