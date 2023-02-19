// <<<<<<< HEAD
// // import logo from './logo.svg';

// import Stack_file from "./Data_structures/Stack_file";


// function App() {
//   return <Stack_file />;
// =======
import './App.css';
import Array from './Components/Array/Array';
import Stack from "./Components/Stack/Stack";
import Stackstructure from './Components/Stack/Stackstructure';
import inputcontainer from './Component_features/inputcontainer';

function App() {
  return (
    <div className="App">
      <h1>Algorithm Visualizer</h1>
      <Array/>
      <Stack/>
      <Stackstructure/>
    </div>
  );

}

export default App;
