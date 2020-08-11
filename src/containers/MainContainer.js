import React, { useState, useEffect } from 'react';
import Task from '../components/Task';
import './containers.css'
import axios from 'axios';
import { TaskModel } from '../utils/TaskModel';


const MainContainer = () => {

    const URL = 'https://hiromi-test.firebaseio.com/task.json';

    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        axios.get(URL)
            .then((res) => setTasks(res.data))
            .catch((error) => alert(error));
    }

    const deleteTask = (id) => {
        axios.delete(`https://hiromi-test.firebaseio.com/task/${id}.json`)
          .then(() => getTasks())
          .catch((error) => alert(error))
    }

    const completeTask = (category, title, done, id) => {
        const currentTask = new TaskModel(category, title, done, id);
        axios.patch(URL, currentTask)
          .then(() => getTasks())
          .catch((error) => alert(error))
      }

    useEffect(() => {
        console.log('Soy useEffect');
        getTasks();
    }, []);


    return (
        <div>
            <main className="main">      

                <div className="container pt-4">

                    {tasks ? Object.keys(tasks).map((id) =>
                            <Task
                                key={id}
                                id={id}
                                title={tasks[id].title}
                                done={tasks[id].done}
                                category={tasks[id].category}
                                deleteTask={deleteTask}
                                completeTask={completeTask}
                            />)
                        : <h1 className="text-white text-center">
                            Completaste todas tus tareas </h1>
                    }

                </div>
            </main>
        </div>
    )
}

export default MainContainer;
