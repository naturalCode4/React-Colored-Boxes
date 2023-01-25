import React from 'react';

export function Users({filteredUsers, usersPosts}) {

    return (
        <div>
            <p><b><u>Users</u></b></p>
            <div>{filteredUsers.map(user => {
                console.log('usersPosts when mapping filteredUsers', usersPosts)
                return (
                    <div>
                        <p>Name {user.name}</p>
                        <p>Company: {user.company.name}</p>
                        <p>Catchphrase: {user.company.catchPhrase}</p>
                        <div>
                            {usersPosts.map(uP => {
                                return (
                                    <div>
                                        <p>User's posts:</p>
                                        {/* <p>{uP.title}</p>
                                        <p>{uP.body}</p> */}
                                    </div>
                                   
                                )
                            })}
                        </div>
                        <br></br>
                        <hr></hr>
                    </div>
                )
            })}</div>
        </div>
    )
}

// https://jsonplaceholder.typicode.com/posts?userId=3