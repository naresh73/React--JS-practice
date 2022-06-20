import './Components/css/slide_bar.css';
import './App.css'
import ControlledCarousel from './Components/JS_files/slide_bar.js';
import Forms from './Components/JS_files/log_in.js';
import ColorSchemesExample from './Components/JS_files/nav_bar';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample/>
      <ControlledCarousel/>
      <Forms/>
    </div>
  );
}

export default App;
