import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState([]);
  const getImage = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=CmaVUA12M5MeuRz5lP0oGF1-rwe8J0mCMtZMM_YhiCQ&query=${search}`
    );
    setImage(response.data.results);
  };
  return (
    <div>
      <div className="main">
        <div className="header">
          <span>Search Image</span>
          <div className="container-input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              name="text"
              className="input"
            />
            <svg
              onClick={getImage}
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                fillRule="evenodd"></path>
            </svg>
          </div>

          <button onClick={getImage}>Send</button>
        </div>
      </div>
      <div className="gallery">
        {image &&
          image.map((item) => (
            <a
              href={item.urls.regular}
              key={item.id}
              target="_blank"
              rel="noreferrer">
              <img key={item.id} src={item.urls.regular} alt="" />
            </a>
          ))}
      </div>
    </div>
  );
}
export default App;
