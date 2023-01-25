import axios from 'axios'
import React, {useState} from 'react'

export function SearchUsers({userInfos, apiBaseURL}) {

    const [text, setText] = useState('')
    const [usersPosts, setUsersPosts] = useState([[]])
    const [filteredUsers, setFilteredUsers] = useState([])

    console.log('on component render: usersPosts', usersPosts)

    const getUserPostInfo = async (id) => {
        const posts = await axios.get(`${apiBaseURL}/posts?userId=${id}`)
        return posts.data
    }  // [{}, {}, {}, {}]

    const handleGetUserButton = async () => {
        console.log('handleGetUserButton')
        const filtered = userInfos.filter(user => user.name.includes(text))
        console.log('filtered', filtered)
        setFilteredUsers(filtered)
        const allPromisedUsersPosts = filtered.map(oneUser => {
            return getUserPostInfo(oneUser.id)
        })
        // const posts = await Promise.all(allPromisedUsersPosts)
        // console.log('posts', posts)
        // setUsersPosts(posts)
        Promise.all(allPromisedUsersPosts)
            .then(allUsersPosts => {
                setUsersPosts(allUsersPosts)
                console.log('usersPosts1', usersPosts)
            })
    } // [[{},{},{}],[{},{}],[{},{},{},{}]]

    return (
        <div>
            <input 
                placeholder='Search users...'
                onChange={e => setText(e.target.value)}
            />
            <button onClick={handleGetUserButton}>   
                Get Users
            </button>
            <p><b><u>Users</u></b></p>
            <div>{usersPosts.map(userPosts => {
                console.log('usersPosts in map', usersPosts)
                return (
                    <div>{userPosts.map(userPost => {
                            return (
                                <div>
                                    <p>{userPost.userId}</p>
                                    <p>{userPost.title}</p>
                                    <p>{userPost.body}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}</div>

        </div>
    )