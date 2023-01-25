import React from "react";

export function SearchPosts({posts, setFilteredPosts}) {

    const filterPosts = (text) => {
        const filtered = posts.filter(post => post.title.includes(text) || post.body.includes(text))
        setFilteredPosts(filtered)
    }

    return (
        <div>
            <input 
                type='text'
                placeholder='Search posts...'
                onChange = {e => filterPosts(e.target.value)}
            />
        </div>
    )
}