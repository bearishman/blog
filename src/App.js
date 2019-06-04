import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import About from "./components/About/About";
import Header from "./components/Header/Header";
import BlogContainer from "./components/Blog/BlogContainer";
import PostContainer from "./components/Post/PostContainer";

import styles from "./App.module.css";



function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <div className={styles.wrapper}>
            <Header/>
            <div className={styles.content}>
              <Route path="/" exact render={() => <BlogContainer/>}/>
              <Route path="/post/:postId" render={() => <PostContainer/>}/>
              <Route path="/about" render={() => <About/>}/>
            </div>
          </div>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
