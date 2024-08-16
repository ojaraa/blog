import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import {createClient} from 'contentful'
import { LuAlarmClock } from "react-icons/lu";

function BlogFullDetails() {

  const spaceID = import.meta.env.VITE_SPACE_ID
  const accessTokenID = import.meta.env.VITE_CDA_TOKEN
  const client = createClient({space: spaceID, accessToken:accessTokenID})
  const {id} = useParams()
  const [singlePost , setSinglePost] = useState([])

  useEffect(() =>{
        const getEntryById = async () =>{
          try{
            await client.getEntry(id)
            .then((entry) =>{
              console.log(entry)
              setSinglePost(entry)
            })
            }catch(err){
            console.log(err)
          }
        }
        getEntryById()
  },[])


  return (
    <>
      <Navbar />
      <div className="blogContainer">
        <div className="blog-page">
          <div className="blog-details">
           
            <h1 className="blog-title">{singlePost.fields.blogTitle}</h1>
            <div className="blog-writer-details">
            <div className="blog-date">
              <LuAlarmClock />
              <p>{singlePost.fields.createdAt}</p>
            </div>
              <p className="writer-name">{singlePost.fields.blogAuthor}</p>
            </div>

            <div className="blog-image">
              <img src={singlePost.fields.blogImage.fields.file.url} alt="" />
            </div>

            <div className="blog-content">
              <p className="blog-paragraph">
               {singlePost.fields.blogDetails}
              </p>



            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogFullDetails;
