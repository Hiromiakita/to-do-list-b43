import React from 'react'
import CreateForm from '../components/CreateForm'
import './containers.css'
import TaskModel from '../utils/TaskModel';
import axios from 'axios';

const CreateTaskContainer = () => {

    const createTask = (title, category) => {
        const URL = 'https://hiromi-test.firebaseio.com/task.json';

        let newTask = {category :category, title : title, done: false } ;
        // const newTask = new TaskModel(category, title, false, 'a');
        axios.post(URL, newTask)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }


    return (
        <React.Fragment>
            <main className="main">
                <div className="container pt-4">
                    <CreateForm createTask={createTask}/>
                </div>
            </main>
        </React.Fragment>
    )
}

export default CreateTaskContainer
