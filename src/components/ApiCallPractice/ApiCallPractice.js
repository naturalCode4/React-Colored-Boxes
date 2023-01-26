import React, {useEffect, useState } from "react";
import { Posts } from './Posts';
import { InputToFilterPosts } from './InputToFilterPosts';
import { Users } from "./Users";
import { SearchForUsersPosts } from './SearchUsers';
import { getUsersAndSetUsers, getPostsAndSetPostsAndSetFilteredPosts } from '../../apiUtil';

function ApiCallPractice() {
    
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [users, setUsers] = useState([])
    const [filteredUsersPosts, setFilteredUsersPosts] = useState([[]])

    useEffect(() => {
        getUsersAndSetUsers(setUsers)
        getPostsAndSetPostsAndSetFilteredPosts(setPosts, setFilteredPosts)
    }, [])

    return (
        <div>
            <hr></hr>
            <h1>ApiCallPractice</h1>
            <SearchForUsersPosts users={users} setFilteredUsersPosts={setFilteredUsersPosts}/>
            <Users filteredUsersPosts={filteredUsersPosts}/>  
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <InputToFilterPosts posts={posts} setFilteredPosts={setFilteredPosts}/>
            <Posts filteredPosts={filteredPosts}/>
        </div>
    )
}

export default ApiCallPractice
