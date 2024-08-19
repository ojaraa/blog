import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import {createClient} from 'contentful'
import { LuAlarmClock } from "react-icons/lu";
import Loader from "../components/loader/Loading";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import ReactMarkdown from 'react-markdown';




const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  },
};


function BlogFullDetails() {

  const spaceID = import.meta.env.VITE_SPACE_ID
  const accessTokenID = import.meta.env.VITE_CDA_TOKEN
  const client = createClient({space: spaceID, accessToken:accessTokenID})
  const {id} = useParams()
  const [singlePost , setSinglePost] = useState([])
  const [loading , setLoading]= useState(true)

  // const content = singlePost?.fields?.blogDetails ;



  useEffect(() =>{
        const getEntryById = async () =>{
          try{
            await client.getEntry(id)
            .then((entry) =>{
              setSinglePost(entry)
              setLoading(false)
            })
            }catch(err){
            console.log(err)
          }
        }
        getEntryById();
  },[])

  console.log(singlePost?.fields?.blogDetails)
if (loading) {
  return <Loader/>;
}
  return (
    <>
      <Navbar />
      <div className="blogContainer">
        <div className="blog-page">
          <div className="blog-details">
           
            <h1 className="blog-title">{singlePost?.fields?.blogTitle}</h1>
            <div className="blog-writer-details">
            <div className="blog-date">
              <LuAlarmClock />
              <p>{singlePost?.fields?.createdAt}</p>
            </div>
              <p className="writer-name">{singlePost?.fields?.blogAuthor}</p>
            </div>

            <div className="blog-image">
              <img src={singlePost?.fields?.blogImage?.fields?.file?.url} alt="" />
            </div>

            <div className="blog-content">
              <p className="blog-paragraph">
             
               <ReactMarkdown>{singlePost?.fields?.blogDetails}</ReactMarkdown>
               
              </p>



            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogFullDetails;
