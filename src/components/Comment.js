import React from "react";

function Comment({user, comment}){

    return(
        <>
        <b>{user}</b>
        <div>{comment}</div>
        </>
    )

}

export default Comment