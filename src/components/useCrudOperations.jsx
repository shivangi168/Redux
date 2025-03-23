import { useEffect, useState } from "react";
import useCrudOperations from "./useCrudOperations";

const CrudComponent = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading, error, fetchData, createData, updateData, deleteData } =
    useCrudOperations(apiUrl);

  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  return (
    <div>
      <h2>CRUD Operations</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* CREATE */}
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={() => createData(newPost)}>Add Post</button>

      {/* READ & DELETE */}
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>
            {post.title} <button onClick={() => deleteData(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* UPDATE */}
      <button onClick={() => updateData(1, { title: "Updated Title", body: "Updated Body" })}>
        Update Post 1
      </button>
    </div>
  );
};

export default CrudComponent;
