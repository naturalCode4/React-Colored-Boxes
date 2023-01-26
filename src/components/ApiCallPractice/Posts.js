import React from 'react';

export function Posts({filteredPosts}) {
    return (
        <div>
            <p><b><u>Posts</u></b></p>
            <div>{filteredPosts.map(filteredPost => {
                return (
                    <div>
                        <p>Post Number {filteredPost.id}</p>
                        <p>Title: {filteredPost.title}</p>
                        <p>Post: {filteredPost.body}</p>
                        <br></br>
                        <hr></hr>
                    </div>
                )
            })}</div>
        </div>
    )
}