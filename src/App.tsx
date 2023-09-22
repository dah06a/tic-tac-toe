import Navbar from './features/navbar/Navbar';
import GameContainer from './features/game/GameContainer';
import GameBoard from './features/game/GameBoard';
import GameButtons from './features/game/GameButtons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GameContainer>
        <GameButtons />
        <GameBoard />
      </GameContainer>
    </div>
  );
}

export default App;
