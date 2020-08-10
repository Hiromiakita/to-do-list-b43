import React from 'react'

const Task = (props) => {

    const { title, done, category, id, deleteTask, completeTask} = props;

    return (
        <div className="card mb-4">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <h5 className="card-title">{done}</h5>
                <p className="card-text">{category}</p>
                { done
                    ? <button className="btn btn-secondary mr-3" onClick={() => completeTask(category, title, false, id)}>Deshacer</button>
                    : <button className="btn btn-primary mr-3" onClick={() => completeTask(category, title, true, id)}>Completar</button> }
                <button href="a" className="btn btn-danger" onClick={() => deleteTask(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Task
