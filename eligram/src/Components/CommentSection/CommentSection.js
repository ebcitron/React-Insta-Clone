import React from 'react';


const CommentSection =props =>{
       
        return (
            <div className="CommentSection" >
                <h1>Comments</h1>
                {props.comments.map(comment => {
                    return (
                        <div>
                            <p>{props.comments.comments}</p>
                            
                        </div>
                    )
                })}
               
                
            </div>  
        );
    
}

export default CommentSection;