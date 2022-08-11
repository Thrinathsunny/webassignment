import React from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Pagination from './pagination';
 const GetData = ()=>{
  const [hover, setHover] = useState(false);
  const[currentpage,setcurrentpage]=useState(1)
  const[postsPerPage,setPostsPerPage]=useState([])
  // const [hover, setHover] = useState(false);
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((response)=>{
       setPosts(response.data)
       setPostsPerPage(response.data.slice(0,3))
       console.log(response.data)

   })
  },[])
  const onHover = (e) => {
    e.preventDefault();
    setHover(true);
    console.log("hovered");
  };

  const onHoverOver = (e) => {
    e.preventDefault();
    setHover(false);
  };

  const pageHandler =(pageNumber)=>{
    setPostsPerPage(posts.slice((pageNumber*4)-4,pageNumber*4))
  }

  return (
   <>
   {
   postsPerPage.map(user=>{
      return(
           <>
            {hover && <p className={hover}>{user.description}</p>}
         <img  onMouseEnter={(e) => onHover(e)}
        onMouseLeave={(e) => onHoverOver(e)}
         src={user.image} alt="notloaded" />
           </>
      )
    })
   }
   <Pagination posts={posts} pageHandler={pageHandler}/>
   </>
  );
}

export default GetData;

 
  