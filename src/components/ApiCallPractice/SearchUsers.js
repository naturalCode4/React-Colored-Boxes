import React, {useState} from 'react'
import { getUsersPosts } from '../../apiUtil'

export function SearchForUsersPosts({users, setFilteredUsersPosts}) {

    const [text, setText] = useState('')

    const handleGetUsersPostsButton = async () => {
        const filteredUsers = users.filter(user => user.name.includes(text))
        const allPromisedUsersPosts = filteredUsers.map(user => {
            return getUsersPosts(user.id)
        })
        Promise.all(allPromisedUsersPosts)
        .then(allUsersPosts => {
            setFilteredUsersPosts(allUsersPosts)
        })
    } // [[{},{},{}],[{},{}],[{},{},{},{}]]

    return (
        <div>
            <input 
                placeholder="Search for users' posts..."
                onChange={e => setText(e.target.value)}
            />
            <button onClick={handleGetUsersPostsButton}>Get Users Posts</button>
        </div>
    )
}