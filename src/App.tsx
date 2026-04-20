import { Route, Routes } from 'react-router-dom';
import CodeWord from './pages/CodeWord';
import Final from './pages/Final';
import Home from './pages/Home/index';
import Quiz from './pages/Quiz';
import Register from './pages/Register';
import Rules from './pages/Rules';
import Streams from './pages/Streams';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/streams" element={<Streams />} />
      <Route path="/quiz/:stream" element={<Quiz />} />
      <Route path="/code-word" element={<CodeWord />} />
      <Route path="/final" element={<Final />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
