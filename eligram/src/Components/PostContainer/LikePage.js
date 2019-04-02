import React from 'react';

const LikePage = props => {
    return (
        <div>
            <button onClick={props.addLike}>Like This</button>
            <h2>Likes:{props.postLikes}</h2>
                
        </div>


        );
}

export default LikePage;