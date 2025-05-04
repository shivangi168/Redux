import React, { useState, useEffect } from "react";
import axios from "axios";
import { isEditable } from "@testing-library/user-event/dist/utils";

function Crud() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedPost, setEditedPost] = useState({ title: "", body: "" });
  const [currentpage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPage = Math.ceil(postList.length / itemsPerPage);
  const indexOfLastItem = currentpage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = postList.slice(indexOfFirstItem, indexOfLastItem);

  const gotoNextPage = () => {
    if (currentpage < totalPage) {
      setCurrentPage(currentpage + 1);
    }
  };
  const gotoPrevPage = () => {
    if (currentpage > 1) {
      setCurrentPage(currentpage - 1);
    }
  };

  const getPostListing = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPostList(res.data);
      console.log("this is the editedpost", res.data);

      setIsLoading(false);
    } catch (error) {
      console.log("some error occured", error.message);
      setIsLoading(false);
    }
  };
  const EditPost = (index) => {
    const post = postList.find((post, i) => post.id == index);
    setEditIndex(index);
    setEditedPost({ title: post.title, body: post.body });
    console.log("this is the doiting post", post);
  };
  const handleDelete = (index) => {
    setPostList(postList.filter((post, i) => post.id !== index));
  };
  const SubmitUpdate = async () => {
    if (editIndex === null || postList[editIndex] === undefined) {
      console.error(
        "Invalid index or post not found",
        editIndex,
        postList[editIndex]
      );
      return;
    }

    const postId = postList[editIndex].id;
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        editedPost
      );
      console.log("this is the editedpost", editedPost);
      setEditIndex(null);
      getPostListing();
    } catch (err) {
      console.log("this is the eorrr in catch blcik", err.message);
    }
  };

  useEffect(() => {
    getPostListing();
  }, []);

  if (isLoading) {
    return <h5>Data is loading...</h5>;
  }

  return (
    <>
      <h5>This is the listing data</h5>
      {editIndex !== null && (
        <>
          <input
            value={editedPost.title}
            onChange={(e) =>
              setEditedPost({ ...editedPost, title: e.target.value })
            }
            type="text"
          />
          <br />
          <button onClick={SubmitUpdate}>Update</button>
        </>
      )}
      {postList && postList.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post, index) => (
                <tr key={post.id}>
                  <td>{post.userId || "ppp"}</td>
                  <td>{post.title}</td>
                  <td>
                    <button onClick={(e) => EditPost(post.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={(e) => handleDelete(post.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "10px" }}>
            <button onClick={gotoPrevPage} disabled={currentpage === 1}>
              Prev
            </button>
            <span style={{ margin: "0 10px" }}>
              Page {currentpage} of {totalPage}
            </span>
            <button onClick={gotoNextPage} disabled={currentpage === totalPage}>
              Next
            </button>
          </div>
        </>
      ) : (
        "No data found"
      )}
    </>
  );
}
export default Crud;
