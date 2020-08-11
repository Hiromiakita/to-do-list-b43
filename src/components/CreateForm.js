import React, {useState} from 'react'

const CreateForm = (props) => {
    const {createTask} = props;

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');


    const handlerTitle = (evento) => {
        setTitle(evento.target.value);
    }

    const handlerCategory = (evento) => {
        setCategory(evento.target.value);
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">Tarea</label>
                    <input onChange={handlerTitle} type="text" className="form-control" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Categoría</label>
                    <input onChange={handlerCategory} type="text" className="form-control" id="category" />
                </div>
                <button onClick={ () => {createTask(title, category)}} className="btn btn-primary">Agregar</button>
            </div>
        </div>
    )
}

export default CreateForm
