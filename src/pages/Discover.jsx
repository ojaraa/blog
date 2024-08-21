import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from "../components/Footer"
import Loader from '../components/loader/Loading'
import {createClient} from 'contentful'
function Discover() {
    const [tagItems, setTagItems] = useState([])
  const [loading , setLoading]= useState(true)

    const spaceID = import.meta.env.VITE_SPACE_ID
    const accessTokenID = import.meta.env.VITE_CDA_TOKEN
    const client = createClient({space: spaceID, accessToken:accessTokenID})

    useEffect(() =>{
        const getAllEntries = async () =>{
            try{
                await client.getEntries()
                .then((entries) =>{
                    setTagItems(entries)
                    setLoading(false)
                })
            }catch(error){
                console.log(error)
            }
        }
        getAllEntries();
    },[])


    // useEffect(() =>{
    //     const getAllEntries = async () =>{
    //         try{
    //             await client.getEntries( {content_type: 'tags'})
    //             .then((entries) =>{
    //                 setTagItems(entries)
    //                 setLoading(false)
    //             })
    //         }catch(error){
    //             console.log(error)
    //         }
    //     }
    //     getAllEntries();
    // },[])

// const tagsDeatils = tags.items
// console.log(tags.items.map((item) => item.map((itemt) => itemt)))
console.log(tagItems)

if (loading) {
    return <Loader/>;
  }
  
  return (
    <>
    <Navbar/>
        <div className="blogContainer">
           <div className="blogpage">

            <div className="tags-container">
                <ul>
                   {tagItems?.items?.map((item) =>(
                        <ol key={item.sys.id}> {item?.fields?.tags}</ol>
                   ))}
                </ul>
            </div>
           </div>
        </div>
    <Footer/>

    </>
  )
}

export default Discover