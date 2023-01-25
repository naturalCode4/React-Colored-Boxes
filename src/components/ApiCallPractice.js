import React, {useEffect, useState } from "react";
import { Posts } from './Posts';
import { SearchPosts } from './SearchPosts';
import { SearchUsers } from './SearchUsers';
import { Users } from './Users';
import { getUsersAndSetUsers, getPostsAndSetPostsAndSetFilteredPosts, apiBaseURL } from '../apiUtil';

function ApiCallPractice() {
    
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsersAndSetUsers(setUsers)
        getPostsAndSetPostsAndSetFilteredPosts(setPosts, setFilteredPosts)
    }, [])

    return (
        <div>
            <hr></hr>
            <h1>ApiCallPractice</h1>
            <SearchUsers users={users}/>
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

