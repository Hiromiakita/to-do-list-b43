import React from 'react'
import CreateForm from '../components/CreateForm'
import './containers.css'

const CreateTaskContainer = () => {
    return (
        <React.Fragment>
            <main className="main">
                <div className="container pt-4">
                    <CreateForm/>
                </div>
            </main>
        </React.Fragment>
    )
}

export default CreateTaskContainer
