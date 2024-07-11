import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { CreateGamePage } from './pages/CreateGamePage';
import { LobbyPage } from './pages/LobbyPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/creategame/:id' element={<CreateGamePage />} />
        <Route path='/lobby/:id' element={<LobbyPage />} />
      </Routes>
    </>
  )
}

export default App
