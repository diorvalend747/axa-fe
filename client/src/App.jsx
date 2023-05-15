import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const UserPosts = lazy(() => import("./pages/UserPosts"));
const UserAlbums = lazy(() => import("./pages/UserAlbums"));
const UserPhotos = lazy(() => import("./pages/UserPhotos"));
const UserDetailPost = lazy(() => import("./pages/UserDetailPost"));
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Suspense>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="users">
              <Route path=":userId/posts" element={<UserPosts />} />
              <Route path=":userId/albums" element={<UserAlbums />} />
            </Route>
            <Route path="posts/:postId/comments" element={<UserDetailPost />} />
            <Route path="albums/:albumId/photos" element={<UserPhotos />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
