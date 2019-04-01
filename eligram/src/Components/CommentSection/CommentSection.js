import React from 'react';
import Comment from './Comment';

const CommentSection =props =>{
       
        return (
            <div className="CommentSection" >
                <h1>Comments</h1>
                {props.comments.map(comment => {
                    return (
                        <div>
                            <Comment comment={comment} />
                            
                        </div>
                    )
                })}
               
                
            </div>  
        );
    
}

export default CommentSection;