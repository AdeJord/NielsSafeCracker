import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import GuessCode from './components/GuessCode'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>
  );
}

export default App;
