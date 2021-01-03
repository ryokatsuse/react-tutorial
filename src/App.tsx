import Game from "./views/components/game"
import {
  RecoilRoot
} from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Game />
      </div>
    </RecoilRoot>
  );
}

export default App