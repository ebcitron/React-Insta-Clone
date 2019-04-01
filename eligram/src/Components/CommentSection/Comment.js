import React from 'react';


const Comment = props => {
    return (
        <div className='comment' >
        
            <p>Username: {props.comment.username}</p>
            <p>  Comment: {props.comment.text}</p>
            <br></br>
        </div>
    )
}

export default Comment;