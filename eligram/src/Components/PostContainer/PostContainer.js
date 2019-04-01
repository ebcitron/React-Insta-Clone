import React from "react";
import Post from "./Post";

const PostContainer = props => {

    console.log("container props", props);
  return (
    <div className="PostContainer">
      <h1>Post Container</h1>
          {props.postData.map(post => {
              return (
                        <div>
                  <Post key={post.id} post={post} />
                </div>
          );
                  })}
    </div>
  );
};

export default PostContainer;
