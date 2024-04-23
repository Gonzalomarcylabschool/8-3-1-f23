/* eslint-disable react/prop-types */
import fetchData from "../utils/fetchData";
import { useState } from "react";

const PostForm = ({ post, fellow }) => {
  const [newFellowId, setNewFellowId] = useState(fellow);
  const [newPostContent, setNewPostContent] = useState(post);

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ postContent: newPostContent,  fellowId: newFellowId })
      }
      await fetchData('/api/posts', options);
    } catch (error) {
      console.log(error);
    }
  
  }

  return (
    <form onSubmit={createPost}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <label htmlFor="body">Body</label>
      <textarea name="body" id="body" value={newBody} onChange={(e) => setNewBody(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm;