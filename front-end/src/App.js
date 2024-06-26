import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import React from "react";
import {
  Home,
  FullPost,
  Registration,
  AddPost,
  Login,
  About,
  Tag,
} from "./pages";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/tags/:tagName" element={<Tag />} />
        </Routes>
        <footer>
          <p>&copy; 2023 Denis Tsimafeyenka. All rights reserved.</p>
        </footer>
      </Container>
    </>
  );
}

export default App;
