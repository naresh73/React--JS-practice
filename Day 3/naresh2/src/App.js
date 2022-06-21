import './Components/css/slide_bar.css';
import './App.css'
import ControlledCarousel from './Components/JS_files/slide_bar.js';
import Forms from './Components/JS_files/log_in.js';
import ColorSchemesExample from './Components/JS_files/nav_bar';
import TagTypesExample from './Components/JS_files/footer.js';
import Example from './Components/JS_files/footer.js';
import FormFloatingBasicExample from './Components/JS_files/log_in.js';
import GridComplexExample from './Components/JS_files/log_in.js';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample/>
      <ControlledCarousel/>
      <GridComplexExample/>
      <Example/>
    </div>
  );
}

export default App;
