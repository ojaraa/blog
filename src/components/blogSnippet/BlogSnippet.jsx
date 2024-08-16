import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {createClient} from 'contentful'
import { LuAlarmClock } from "react-icons/lu";


function BlogSnippet() {
  const [blogPost, setBlogPost] = useState([])
  const spaceID = import.meta.env.VITE_SPACE_ID
  const accessTokenID = import.meta.env.VITE_CDA_TOKEN

  const client = createClient({space: spaceID, accessToken:accessTokenID})

  useEffect(() =>{
      const getAllEntries = async () =>{
        try{
          await client.getEntries()
          .then((entries) =>{
            console.log(entries)
            setBlogPost(entries)
          })
        }catch(error){
          console.log(error)
        }
      }
      getAllEntries()
  }, [])

  return (
    <div className="blogContainer">
      {blogPost?.items?.map((post) => (
        <div className="blog-page" key={post.sys.id}>
          <div className="blog-details">
            <h1 className="blog-title">
              {post.fields.blogTitle}
            </h1>
            <div className="blog-writer-details">
              <div className="blog-date">
                <LuAlarmClock />
                <p>{post.fields.createdAt}</p>
              </div>
              <p className="writer-name">{post.fields.blogAuthor}</p>
            </div>

            <Link to={`/blogs/${post.sys.id}`}>
            <div className="blog-snippet-image">
              { post.fields.blogImage.fields.file.url&& <img src={ post.fields.blogImage.fields.file.url} alt={post.fields.blogTitle} />}
            </div>

            <div className="blog-content">
              <p className="blog-paragraph">
                {post.fields.blogSnippet}
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
