import React, { PureComponent } from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div className="PostContainer">
      <h1>Post Container</h1>
      {props.postData.map(post => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostContainer;
