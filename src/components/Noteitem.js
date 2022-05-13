import React from 'react'

export const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            {/* {note.title}
            {note.description} */}
            <div class="card my-3">

                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} Hi e veryone thios is Lovepret Singh, i am here for you i am doing great work for myselp i dont when i will be the pro developer Hi e veryone thios is Lovepret Singh, i am here for you i am doing great work for myselp i dont when i will be the pro developer Hi e veryone thios is Lovepret Singh, i am here for you i am doing great work for myselp i dont when i will be the pro developer </p>

                </div>
            </div>
        </div>
    )
}
