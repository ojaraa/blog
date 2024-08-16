import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {createClient} from 'contentful'
import { LuAlarmClock } from "react-icons/lu";
import Loader from "../loader/Loading";


function BlogSnippet() {
  const [blogPost, setBlogPost] = useState([])
  const [loading , setLoading]= useState(true)
  const spaceID = import.meta.env.VITE_SPACE_ID
  const accessTokenID = import.meta.env.VITE_CDA_TOKEN

  const client = createClient({space: spaceID, accessToken:accessTokenID})
  
  // convert date to dateString
  const convertDate = (str) => {
    let date = new Date(str);
    return date.toDateString()
  }

  useEffect(() =>{
      const getAllEntries = async () =>{
        try{
          await client.getEntries()
          .then((entries) =>{
            setBlogPost(entries)
            setLoading(false)
          })
        }catch(error){
          console.log(error)
        }
      }
      getAllEntries()
  }, [])
  if (loading) {
    return <Loader/>;
  }
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
                <p>{convertDate(post.fields.createdAt)}</p>
              </div>
              <span>.</span>
              <p className="writer-name"> {post.fields.blogAuthor}</p>
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
