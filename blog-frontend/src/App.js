import './App.css';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import { Helmet } from 'react-helmet-async';
function App() {
  return (
    <>
      <Helmet>
        <title>REACTER</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/@:username">
          <Route index element={<PostListPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
