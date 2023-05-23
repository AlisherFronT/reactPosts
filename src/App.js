import React, {useState} from "react";
import './styles/style.css'

import PostList from "./components/PostList";
import Form from "./components/Form";


function App() {

   
    const [posts, setPosts] = useState([
        {id:1, title: "JavaScript", body: "Lorem 20"},
        {id:2, title: "C#", body: "Lorem 20"},
        {id:3, title: "Python", body: "Lorem 20"}
    ])

  return (
    <div className="App">
      <Form posts={posts} setPosts={setPosts}/>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
