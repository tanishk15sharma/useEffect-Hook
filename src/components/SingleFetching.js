import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleDataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((item) => setPost(item.data));
  }, [id]);
  return (
    <div>
      <lable>
        Write the id here and you will see the title of the given id:
      </lable>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <h1> {post.title} </h1>
    </div>
  );
}

export default SingleDataFetching;
