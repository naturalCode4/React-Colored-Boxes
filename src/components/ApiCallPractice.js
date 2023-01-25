import axios from 'axios';
import React, {useEffect, useState } from "react";
import { Posts } from './Posts';
import { SearchPosts } from './SearchPosts';
import { SearchUsers } from './SearchUsers';
import { Users } from './Users';

function ApiCallPractice() {

    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])

    const [userInfos, setUserInfos] = useState([])

    const apiBaseURL = 'https://jsonplaceholder.typicode.com'

    const getUsers = async () => {
        const data = await axios.get(`${apiBaseURL}/users`)
        setUserInfos(data.data)
    }

    const getPosts = async () => {
        const data = await axios.get(`${apiBaseURL}/posts`) 
        setPosts(data.data)
        setFilteredPosts(data.data)
    }

    useEffect(() => {
        getUsers()
        getPosts()
    }, [])

    return (
        <div>
            <hr></hr>
            <h1>ApiCallPractice</h1>
            <SearchUsers userInfos={userInfos} filteredUsers={filteredUsers} setFilteredUsers={setFilteredUsers} apiBaseURL={apiBaseURL}/>
            {/* <Users filteredUsers={filteredUsers} usersPosts={usersPosts} apiBaseURL={apiBaseURL}/> */}
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <SearchPosts posts={posts} setFilteredPosts={setFilteredPosts}/>
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

