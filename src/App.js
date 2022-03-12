
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";

const App = (props) => {
  return (
    <>
      <h1>Stranger's Things</h1>
      <PostList />
    </>
  );
}

export default hot(App);
