import React from 'react'

const Form = (props) => {

    return (
        <div>
            <form className='w-50' onSubmit={(event) => props.handleSubmit(event)}>
                <div className="row mb-3">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(event) => props.handleTitle(event)} className="form-control" id="title" />
                    </div>
                    <span>{props.title}</span>
                </div>
                <div className="row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(event) => props.handleDescription(event)} className="form-control" id="description" />
                    </div>
                </div>
                <span>{props.description}</span>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
        </div>
    )
}

export default Form