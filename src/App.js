import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Comment from './components/Comment/Comment';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="posts" element={<Home />} />
        <Route path="post/:id" element={<Comment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
