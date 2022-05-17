import React from 'react'
// import { Link } from 'react-router-dom'

export const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div> 
    )
}
