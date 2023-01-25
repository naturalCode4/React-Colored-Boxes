import React, {useState} from 'react'
import { getUserPostInfo, apiBaseURL } from '../apiUtil'

export function SearchUsers({users}) {

    const [text, setText] = useState('')
    const [filteredUsersPosts, setFilteredUsersPosts] = useState([[]])
    const [filteredUsers, setFilteredUsers] = useState([])

    const handleGetUserButton = async () => {
        const filtered = users.filter(user => user.name.includes(text))
        setFilteredUsers(filtered)
        const allPromisedUsersPosts = filtered.map(oneUser => {
            return getUserPostInfo(oneUser.id)
        })
        Promise.all(allPromisedUsersPosts)
            .then(allUsersPosts => {
                setFilteredUsersPosts(allUsersPosts)
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
            <div>{filteredUsersPosts.map(userPosts => {
                return (
                    <div>
                        <p><u>Posts of UserId: {userPosts[0].userId}</u></p>
                        <div>{userPosts.map(userPost => {
                                return (
                                    <div>
                                        <p>{userPost.title}</p>
                                        <p>{userPost.body}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <br></br>
                    </div>
                )
            })}</div>

        </div>
    )
}