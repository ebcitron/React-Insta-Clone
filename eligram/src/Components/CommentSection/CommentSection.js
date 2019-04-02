import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }
 
    handleChange = e => {

        this.setState({ [e.target.name]: e.target.value });
    
    }
    
    

    enterComment = e => {
        e.preventDefault();
        const newComment = { username: 'ebcitron', text: this.state.comment };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: '' });
        e.preventDefault();
    }
    render() {
        
        return (
            <div className="CommentSection" >
                <h1>Comments</h1>
                {this.state.comments.map((comment, i) => {
                    return (
                       
                        <div>
                            <Comment key={i} comment={comment} />
                            
                            
                        </div>
                             
                      
                    )
                })}
                
                <NewComment
                    
                    handleChange={this.handleChange}
                    submitComment={this.submitComment} 
                enterComment = {this.enterComment}/>
                {/* <NewComment comments={props.handleChange} /> */}
                
            </div>
        );
    
    }
}
export default CommentSection;