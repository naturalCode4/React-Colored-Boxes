import axios from 'axios';
import React, {useEffect, useState } from "react";
import { Posts } from './Posts';
import { Search } from './Search';

function ApiCallPractice() {

    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])

    const getPosts = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts') 
        console.log('data')
        setPosts(data.data)
        setFilteredPosts(data.data)
    }

    useEffect(() => {
        getPosts()
        .then(() => console.log('posts', posts))
        .then(() => console.log('filteredPosts', filteredPosts))
    }, [])

    return (
        <div>
            <hr></hr>
            <h1>ApiCallPractice</h1>
            <Search posts={posts} setFilteredPosts={setFilteredPosts}/>
            <Posts filteredPosts={filteredPosts}/>
        </div>
    )
}

export default ApiCallPractice

/*
Give all posts that have card
Search bar ==> live filter posts by content words. Searches for in title or postBody. Content has that string in it
Search bar also (could be seperate or same) look for names ==> all that users posts, preferably on a card

[  le    ] gives all posts from Leanne and also from Clementine
*/

