import Game from "./views/components/game";
import './App.css';
import {
  RecoilRoot
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <Game />
    </div>
    </RecoilRoot>
  );
}

export default App;