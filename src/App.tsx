import Navbar from './features/navbar/Navbar';
import GameContainer from './gameContainer/GameContainer';
import Board from './features/game/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GameContainer>
        <Board />
      </GameContainer>
    </div>
  );
}

export default App;
