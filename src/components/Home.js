import React from 'react';
import { Notes } from './Notes';

export const Home = () => {
    return (
        <div>
            <div className="container my-3">
                <h1>Add Your Notes </h1>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title - Title of the Note </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form></div>
            <Notes/>

        </div>
    )
}
