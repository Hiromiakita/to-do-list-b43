import React from 'react'
import CreateForm from '../components/CreateForm'
import './containers.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateTaskContainer = () => {

    const history = useHistory();

    const createTask = (title, category) => {
        const URL = 'https://hiromi-test.firebaseio.com/task.json';

        let newTask = {category :category, title : title, done: false } ;
        axios.post(URL, newTask)
            .then(res => history.push('/'))
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
