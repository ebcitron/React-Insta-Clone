import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import LikePage from './LikePage';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postLikes: props.post.likes
        };
    }

    addLike = () => {
        const postLikes = this.state.postLikes + 1;
        this.setState({ postLikes });
    };
    
    render() {
        return (
            <div className="post-border">
                <PostHeader
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div className="post-image-wrapper">
                    <img
                        alt="post thumbnail"
                        className="post-image"
                        src={this.props.post.imageUrl}
                    />
                </div>
                <LikePage
                    addLike={this.addLike}
                    postLikes={this.state.postLikes}
                />
                <CommentSection
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                />
            </div>
        );
    }
}
        Post.propTypes = {
            post: PropTypes.shape({
              username: PropTypes.string,
              thumbnailUrl: PropTypes.string,
              imageUrl: PropTypes.string
            })
          }; 
export default Post;