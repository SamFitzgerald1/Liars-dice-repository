import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { CreateGamePage } from './pages/CreateGamePage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/creategame/:id' element={<CreateGamePage />} />
      </Routes>
    </>
  )
}

export default App
