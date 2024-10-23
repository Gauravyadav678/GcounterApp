
import './App.css';
import Decrement from './components/decrement';
import Increment from './components/incremet';
import MainValue from './components/valu';

function App() {
  return (
    <div className="App">
      <>
      <h1>This is the counter App</h1>
       
       <button>Increment {<Increment/>}</button>
      <MainValue/>
      <Decrement/>
      </>
    </div>
  );
}

export default App;
