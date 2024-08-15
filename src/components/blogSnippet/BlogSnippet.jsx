import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../data.json";
import { LuAlarmClock } from "react-icons/lu";
import blogImage from "../../assets/blog1.png";

const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

function BlogSnippet() {
  const [blog, setBlog] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <div className="blogContainer">
      {blog.map((item, index) => (
        <div className="blog-page" key={item.id}>
          <div className="blog-details">
            <h1 className="blog-title">
              {item.blogname}
            </h1>
            <div className="blog-writer-details">
              <div className="blog-date" key={item.id}>
                <LuAlarmClock />
                <p>{item.date}</p>
              </div>
              <p className="writer-name">{item.writer}</p>
            </div>

            <Link to={`/blogs/${item.id}`}>
            <div className="blog-snippet-image">
              {item.image && <img src={item.image} alt={item.blogname} />}
            </div>

            <div className="blog-content">
              {/* <p className="blog-paragraph">{item.snippet}</p> */}
              <p className="blog-paragraph">
                {expanded[item.id]
                  ? item.snippet
                  : truncateText(item.snippet, 400)}

                
              </p>
            </div>

          </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogSnippet;
