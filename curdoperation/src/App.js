import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home';
import {Add} from './components/Add';
import {Edit} from './components/Edit';

import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">

          <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Add/>}></Route>
          <Route path='/Edit' element={<Edit/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
