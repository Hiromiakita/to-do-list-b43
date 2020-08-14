import React, { useState, useEffect } from 'react';
import Task from '../components/Task';
import './containers.css'
import axios from 'axios';
// import { TaskModel } from '../utils/TaskModel';


const MainContainer = () => {

    const URL = 'https://hiromi-test.firebaseio.com/task.json';

    const [tasks, setTasks] = useState([]);
    let [tasksFiltered, setTasksFiltered] = useState([]);


    const getTasks = () => {
        axios.get(URL)
            .then((res) => {
                setTasks(res.data)
                console.log(res.data)
                modificarTasks(res.data)
            }).then((res)=>console.log(tasks))
            .catch((error) => alert(error));
    }

    const modificarTasks = (data) => {
        setTasks(Object.keys(data).map(id => data[id]))
        setTasksFiltered(Object.keys(data).map(id => data[id]));
    }

    const buscarTasks = (evento) => {
        
        let busqueda = evento.target.value;
        console.log('tasks',tasks);
        console.log('buscando', busqueda);
        setTasksFiltered(tasks.filter(task => {
            return task.category.includes(busqueda);
        }));
        console.log('filtradas', tasksFiltered);
    }

    const deleteTask = (id) => {
        axios.delete(`https://hiromi-test.firebaseio.com/task/${id}.json`)
          .then(() => getTasks())
          .catch((error) => alert(error))
    }

    // const completeTask = (category, title, done, id) => {
    //     // const currentTask = new TaskModel(category, title, done, id);
    //     axios.patch(URL, currentTask)
    //       .then(() => getTasks())
    //       .catch((error) => alert(error))
    //   }

    useEffect(() => {
        console.log('Soy useEffect');
        getTasks();
        console.log(tasks);
    }, []);


    return (

        <div>
            <main className="main">      

                <div className="container pt-4">
                    <input onChange={buscarTasks}/>

                    {/* {tasks && (tasksFiltered.length === 0) ? Object.keys(tasks).map((id) =>
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
                    } */}
                    {tasksFiltered ? tasksFiltered.map(task => 
                        (<Task key={task.id}
                            id={task.id}
                            title={task.title}
                            done={task.done}
                            category={task.category}
                            deleteTask={deleteTask}
                            // completeTask={completeTask}
                            />)
                ): <h1>No hay resultados</h1>}

                </div>
                <button onClick={() => console.log(tasks)}>CLICK</button>
            </main>
        </div>
    )
}

export default MainContainer;
