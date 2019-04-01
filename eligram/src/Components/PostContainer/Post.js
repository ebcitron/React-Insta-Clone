import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';


const Post = props => {
    console.log("in Post, state, props", props.post);
    return (
            <div> 
            <PostHeader post={props.post} />
            <CommentSection comments = {props.post.comments} />
            </div>
        );
        }
    
    
    
    
    
export default Post;