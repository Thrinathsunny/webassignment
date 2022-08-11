import React from "react";
import "./pagination.css"

const Pagination = ({posts,pageHandler}) => {
    let pageNumbers = []
    for(let i=1;i<Math.ceil(posts.length/4)+1;i++){
        pageNumbers.push(i)
    }
    return (
        <>
        <center>
        {pageNumbers.map(page=><div onClick= {()=>pageHandler(page)}className="pagenumber">{page}</div>)}
        </center>
        </>
    )
}
export default Pagination