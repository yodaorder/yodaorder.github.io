import { useEffect, useState } from "react";

import {
  getItems,
  addItem,
  removeItem
} from "../services/database";


function ManageNews() {

  const [newsList, setNewsList] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Announcement");


  async function loadNews() {

    const data = await getItems("news");

    setNewsList(data);

  }


  useEffect(() => {

    loadNews();

  }, []);



  async function createNews() {

    if (!title || !description) {
      return;
    }


    const newPost = {
      title,
      description,
      category,
      date: new Date().toLocaleDateString()
    };


    await addItem(
      "news",
      newPost
    );


    setTitle("");
    setDescription("");

    loadNews();

  }



  async function deleteNews(id) {

    await removeItem(
      "news",
      id
    );


    loadNews();

  }



  return (
    <div className="admin-section">

      <h1>
        Manage News
      </h1>


      <div className="admin-card">

        <h2>
          Create News Post
        </h2>


        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />


        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >

          <option>
            Announcement
          </option>

          <option>
            Team Update
          </option>

          <option>
            Partnership
          </option>

        </select>


        <button
          className="admin-btn"
          onClick={createNews}
        >
          Add News
        </button>


      </div>



      <h2>
        Current News
      </h2>


      {newsList.map((article) => (

        <div
          className="admin-card"
          key={article.id}
        >

          <h3>
            {article.title}
          </h3>


          <p>
            {article.description}
          </p>


          <small>
            {article.category} - {article.date}
          </small>


          <br />


          <button
            className="admin-btn"
            onClick={() => deleteNews(article.id)}
          >
            Delete
          </button>


        </div>

      ))}


    </div>
  );
}


export default ManageNews;