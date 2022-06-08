import React from "react";
import video from "../data/video";
import Comment from "./Comment";

function CommentList(){
    // const commentList = video.comments.map() 
    const commentList = video.comments.map((comment)=>(
        <Comment 
        key ={comment.id}
        user = {comment.user}
        comment = {comment.comment}/>
     ))
    
     return(
         <div>
          <b>2 Comments </b>  
        <div>
          {commentList}
        </div>
        </div>
    )

}

export default CommentList