import React from 'react';



const PostHeader = props => {
    console.log("in Post, state, props", props.post);
        return (
            <div className='Post'>
                <h2> {props.post.username}</h2>
                <p>
                    
                    {props.post.thumbnailUrl}
                   </p> 
                <p>
                    {props.post.id}
                    </p>
                    

                <p>

                {props.post.imageUrl}
                </p>
                <p>
                    
                    {props.post.timestamp}
                </p>
                
                
                </div>
        );
    }

export default PostHeader;