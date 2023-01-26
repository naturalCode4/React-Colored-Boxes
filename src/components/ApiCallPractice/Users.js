import React from "react"

export function Users({filteredUsersPosts}) {

    return (
        <div>
        <p><b><u>Users</u></b></p>
            <div>{filteredUsersPosts.map(userPosts => {
                return (
                    <div>
                       {userPosts[0] && <p><u>Posts by UserId: {userPosts[0].userId}</u></p>}
                        <div>{userPosts.map((userPost, index) => {
                                return (
                                    <div>
                                        <p>Post #{index + 1}</p>
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