import axios from 'axios'

const apiBaseURL = 'https://jsonplaceholder.typicode.com'

export const getUsersAndSetUsers = async (setUsers) => {
    const users = await axios.get(`${apiBaseURL}/users`)
    setUsers(users.data)
}

export const getPostsAndSetPostsAndSetFilteredPosts = async (setPosts, setFilteredPosts) => {
    const posts = await axios.get(`${apiBaseURL}/posts`) 
    setPosts(posts.data)
    setFilteredPosts(posts.data)
} // [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]]

export const getUsersPosts = async (id) => {
    const posts = await axios.get(`${apiBaseURL}/posts?userId=${id}`)
    return posts.data
}  // [{}, {}, {}]

