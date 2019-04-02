import React from 'react';



const PostHeader = props => {
    console.log("in Post, state, props", props.post);
        return (
            <div className='Post'>
                <h2> {props.username}</h2>
                <p>
                    
                    {props.thumbnailUrl}
                   </p> 
                <p>
                    {props.id}
                    </p>
                    

                <p>

                {props.imageUrl}
                </p>
                <p>
                    
                    {props.timestamp}
                </p>
                
                
                </div>
        );
    }

export default PostHeader;