import React from 'react'
import './loading.css'

function Loading({height, width}) {
    return (
        <div className="load-page">
            <div className="loader">
                <img src="/loading.gif" alt="loading" height={"150" || height} width={"150" || width}/>
            </div>
        </div>
    )
}

export default Loading
