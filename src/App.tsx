import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './landing/landing';

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </main>
  );
}

export default App;
