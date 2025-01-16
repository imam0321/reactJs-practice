import { useEffect, useState } from "react";
import Posts from "./components/Posts.jsx";
import EditPost from "./components/EditPost.jsx";
import AddPost from "./components/AddPost.jsx";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(); // post I am editing
  const [error, setError] = useState(null);

  const handleAddPost = async (newPost) => {
    try {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;

      const finalPost = {
        id: id.toString(),
        ...newPost,
      };

      const response = await axios.post(
        "http://localhost:8000/posts",
        finalPost
      );

      setPosts([...posts, response.data]);
    } catch (error) {
      if (error.response) {
        setError(
          `Error from server status: ${error.response.status} - message: ${error.response.data}`
        );
      } else {
        setError(error.message);
      }
    }
  };

  const handleDeletePost = async (postId) => {
    if (confirm("Are you sure you want to delete the post?")) {
      try {
        await axios.delete(`http://localhost:8000/posts/${postId}`);
        const newPosts = posts.filter((post) => post.id !== postId);
        setPosts(newPosts);
      } catch (error) {
        if (error.response) {
          setError(
            `Error from server status: ${error.response.status} - message: ${error.response.data}`
          );
        } else {
          setError(error.message);
        }
      }
    } else {
      console.log("You chose not to delete the post!");
    }
  };

  const handleEditPost = async (updatedPost) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/posts/${updatedPost.id}`,
        updatedPost
      );
      const updatedPosts = posts.map((post) =>
        post.id === response.data.id ? response.data : post
      );

      setPosts(updatedPosts);
    } catch (error) {
      if (error.response) {
        setError(
          `Error from server status: ${error.response.status} - message: ${error.response.data}`
        );
      } else {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/posts");
        console.log(response.data);
        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (error) {
        if (error.response) {
          setError(
            `Error from server status: ${error.response.status} - message: ${error.response.data}`
          );
        } else {
          setError(error.message);
        }
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">API Request with Axios</h1>
        <hr className="border border-black my-4" />

        <div className="ms-5 my-5">
          <Posts
            posts={posts}
            onDeletePost={handleDeletePost}
            onEditClick={setPost}
          />

          <hr className="border border-black my-4" />

          {!post ? (
            <AddPost onAddPost={handleAddPost} />
          ) : (
            <EditPost post={post} onEditPost={handleEditPost} />
          )}

          {error && (
            <>
              <hr className="border border-black my-4" />
              <div className="bg-pink-500 p-2">{error}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
