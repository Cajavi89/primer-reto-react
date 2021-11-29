import {useState} from 'react'
import './App.css';

function App() {
const [valor,setValor] = useState(0)
const incrementar=()=>{
  setValor(valor+1)
}
  return (
    <div className="App">
      <h1>{valor}</h1>
      <button onClick={incrementar}>Incrementa</button>
    </div>
  );
}

export default App;
