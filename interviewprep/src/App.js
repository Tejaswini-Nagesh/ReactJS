import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Button from './components/Button';
import Counter from './components/Counter';
import ValidationFrom from './components/ValidationFrom';
import UseStateArray from './components/UseStateArray';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import UseStateSpread from './components/UseStateSpread';
import CircuitEval from './components/CircuitEval';
import BasicForm from './components/BasicForm';
import UseEffects from './components/useEffects/UseEffects';
import UseEffect2 from './components/useEffects/Useffect2';
import UseEffectAPI from './components/useEffects/UseEffectAPI';

function App() {


  return (
    <div>
      <UseEffectAPI/>
     {/*<UseEffect2/>*/}
     {/* <UseEffects/>*/}
      {/*<BasicForm/>*/}
     {/* <CircuitEval/>*/}
      { /*<UseStateSpread/>*/}
      {/*<UseStateArray /> */}
      <Router>
        <Routes>
     <Route path="/button" element={<Button/>}></Route>
     <Route path="/counter" element={<Counter/>}></Route>
     <Route path="/validateform" element={<ValidationFrom/>} />
     </Routes>
      </Router>
    </div>

  );
}

export default App;
