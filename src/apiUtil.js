import axios from 'axios'

export const apiBaseURL = 'https://jsonplaceholder.typicode.com'

export const getUsersAndSetUsers = async (setUsers) => {
    console.log('getUsers called')
    const data = await axios.get(`${apiBaseURL}/users`)
    setUsers(data.data)
}

// const users = await getUsers()
// setUserInfos(users)

export const getPostsAndSetPostsAndSetFilteredPosts = async (setPosts, setFilteredPosts) => {
    console.log('getPosts called')
    const data = await axios.get(`${apiBaseURL}/posts`) 
    setPosts(data.data)
    setFilteredPosts(data.data)
}

export const getUserPostInfo = async (id) => {
    const posts = await axios.get(`${apiBaseURL}/posts?userId=${id}`)
    return posts.data
}  // [{}, {}, {}, {}]

