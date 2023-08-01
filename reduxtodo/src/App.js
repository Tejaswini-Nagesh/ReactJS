import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <header className="App-header">Todo List app in Redux</header>
        <form>
          <input placeholder="Enter a Todo list" style={{
            width:350,
            padding:10,
            borderRadius:20,
            border:"none",
            fontSize:20,
          }}/>
          <button type="submit" style={{
            padding:12,
            borderRadius:25,
            fontSize:15,
            marginLeft:20,
          }}>Go</button>

        </form>

        <ul>
            <li>
              <span>First Todo</span>
              <button
              style={{borderRadius:25,
              padding:10,
            border:"1px solid white",
          color:"white",
        backgroundColor:"orangered",}}
              >Delete</button>
            </li>
        </ul>
    </div>
  );
}

export default App;
