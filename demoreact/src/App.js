import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import Header from './components/Header';
import data from './data.json';
import Message from './components/Message';
import Counter from './components/Counter'
import FunctionalClick from './components/FunctionalClick';
import EventBind from './components/EventBind';
import Forms from './components/Forms';
import PureComponet from './components/PureComponet';

function App() {
  

  return (
    <>
    <div className="container">
    <h1> Increment/Decrement Counter</h1>
    <h4>Using React and Redux</h4>
    <div className="quantity">
    <a className="quantity_minus" title="Decrement"><span> -</span></a>
    <input name="quantity" type="text" className="quantity_input"/>
    <a className="quantity_plus" title="Increment"><span>+</span></a>
    </div>
   

    </div>
    
        </>
  );
}

export default App;
