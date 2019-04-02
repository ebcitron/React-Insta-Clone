import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';

const CommentSection = props => {
    
    
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
               <NewComment comments={props.handleChange} />
                
            </div>
        );
    
}

export default CommentSection;