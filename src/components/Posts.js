import React from 'react';

export function Posts({filteredPosts}) {
    return (
        <div>
            <p><b><u>Posts</u></b></p>
            <div>{filteredPosts.map(post => {
                return (
                    <div>
                        <p>Post Number {post.id}</p>
                        <p>Title: {post.title}</p>
                        <p>Post: {post.body}</p>
                        <br></br>
                        <hr></hr>
                    </div>
                )
            })}</div>
        </div>
    )
}