import React from "react";
import axios from 'axios'

function ApiCallPractice() {

    fetch('https://jsonplaceholder.typicode.com/posts')    

    return (
        <div>
            <hr></hr>

            <h1>ApiCallPractice</h1>
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
