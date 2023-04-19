import "./App.css";
import Home from "./pages/Home";
import UserPosts from "./pages/UserPosts";
import UserAlbums from "./pages/UserAlbums";
import UserPhotos from "./pages/UserPhotos";
import UserDetailPost from "./pages/UserDetailPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users/:userId/posts" element={<UserPosts />} />
          <Route path="/users/:userId/albums" element={<UserAlbums />} />
          <Route path="/posts/:postId/comments" element={<UserDetailPost />} />
          <Route path="/albums/:albumId/photos" element={<UserPhotos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
