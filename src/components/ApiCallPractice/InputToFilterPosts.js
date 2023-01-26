import React from "react";

export function InputToFilterPosts({posts, setFilteredPosts}) {

    const filterPostsByIncludesText = (text) => {
        const postsThatIncludeText = posts.filter(post => post.title.includes(text) || post.body.includes(text))
        setFilteredPosts(postsThatIncludeText)
    }

    return (
        <div>
            <input 
                type='text'
                placeholder='Filter posts...'
                onChange = {e => filterPostsByIncludesText(e.target.value)}
            />
        </div>
    )
}