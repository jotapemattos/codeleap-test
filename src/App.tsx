import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import './styles/globals.css';
import FormPosts from './pages/FormPosts';

function App() {
  return (
    <div className="bg-[#DDDDDD] min-w-screen min-h-screen flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/posts" element={<FormPosts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
