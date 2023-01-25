import React from "react";

export function SearchPosts({posts, setFilteredPosts}) {

    const filterPostsByIncludesText = (text) => {
        const postsThatIncludeText = posts.filter(post => post.title.includes(text) || post.body.includes(text))
        setFilteredPosts(postsThatIncludeText)
    }

    return (
        <div>
            <input 
                type='text'
                placeholder='Search posts...'
                onChange = {e => filterPostsByIncludesText(e.target.value)}
            />
        </div>
    )
}