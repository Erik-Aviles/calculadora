import './App.css';
import { Pantalla } from './components/Pantalla';
import { Boton } from './components/Boton';
import { Clear } from './components/Clear';
import { Logo } from './components/Logo';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };
  
  const doCalculo = () =>{
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Ingrese valores para realizar la operacion');
    }
  };
  return (
    <div className='App'>
      <Logo />
      <div className='contenedor-calculadora'>
       
        <Pantalla input= {input}/>
        <div className='fila'>
          <Boton manejarClic={addInput}>
            1
          </Boton>
          <Boton manejarClic={addInput}>
            2
          </Boton>
          <Boton manejarClic={addInput}>
            3
          </Boton>
          <Boton manejarClic={addInput}>
            +
          </Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>
            4  
          </Boton>
          <Boton manejarClic={addInput}>
            5
          </Boton>
          <Boton manejarClic={addInput}>
            6
          </Boton>
          <Boton manejarClic={addInput}>
            -
          </Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>
            7  
          </Boton>
          <Boton manejarClic={addInput}>
            8
          </Boton>
          <Boton manejarClic={addInput}>
            9
          </Boton>
          <Boton manejarClic={addInput}>
            *
          </Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={doCalculo}>
            = 
          </Boton>
          <Boton manejarClic={addInput}>
            0
          </Boton>
          <Boton manejarClic={addInput}>
            .
          </Boton>
          <Boton manejarClic={addInput}>
            /
          </Boton>
        </div>

        <div className='fila'>
          <Clear manejarClear={() => setInput('')}>
            Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
