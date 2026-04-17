import { Route, Routes } from 'react-router-dom';
import CodeWord from './pages/CodeWord';
import Final from './pages/Final';
import Home from './pages/Home/index';
import Over from './pages/Over';
import Quiz from './pages/Quiz';
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
      <Route path="/over" element={<Over />} />
    </Routes>
  );
}

export default App;
