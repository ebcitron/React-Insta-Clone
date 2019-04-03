import React from 'react';

const NewComment = props => {


    return (
        <div className='newComment'>
            <form>

                <input
                    value='ebcitron'
                    type='text'
                    name = 'username'
                    placeholder = 'ebcitron'
                />
                <input
                onSubmit = {props.enterComment}
                type='text'
                placeholder='Comment'
                value={props.newValue}
                onChange={props.handleChange}
                name='comment'
            />
            <button onClick={props.enterComment}>Search</button>


            </form>
        </div>
)

}
export default NewComment;