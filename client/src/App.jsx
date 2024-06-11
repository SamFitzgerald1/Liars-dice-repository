import io from 'socket.io-client';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { GameListPage } from './pages/GameListPage';
import { CreateGamePage } from './pages/CreateGamePage';

const socket = io.connect('http://localhost:3000');

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/creategame' element={<CreateGamePage />} />
        <Route path='/gamelist' element={<GameListPage />} />
      </Routes>
    </>
  )
}

export default App
