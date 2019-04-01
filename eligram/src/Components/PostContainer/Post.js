import React, { PureComponent } from 'react';


class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='Post'>
            <h1> IBIKI </h1>
                <h2> {this.props}</h2>
                </div>
        );
    }
}





export default Post;