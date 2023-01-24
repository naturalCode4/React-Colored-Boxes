import React from "react";

export function Search({posts, setFilteredPosts}) {

    const filterPosts = (text) => {
        const filtered = posts.filter(post => post.title.includes(text) || post.body.includes(text))
        setFilteredPosts(filtered)
    }

    return (
        <div>
            <input 
                type='text'
                placeholder='Search...'
                onChange = {e => filterPosts(e.target.value)}
            />
        </div>
    )
}