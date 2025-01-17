import React, { useState, useRef, useEffect } from 'react';
import ListGroup from "react-bootstrap/ListGroup";

import { ToDoForm } from "./ToDoForm.tsx";
import { ToDoItem } from "./ToDoItem.tsx";

import useFetchWithMsal from '../../hooks/useFetchWithMsal.tsx';
import { protectedResources } from "../../authConfig.ts"

function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}

export const ListView = (props) => {

    const { error, execute } = useFetchWithMsal({
        scopes: protectedResources.Backend.scopes.write
    });

    const [tasks, setTasks] = useState(props.toDoListData);

    const handleAddTask = (description) => {
        const newTask = {
            description: description,
        };

        execute('POST', protectedResources.Backend.endpoint, newTask).then((response) => {
            if (response) {
                setTasks([...tasks, response]);
            }
        });
    };

    const handleDeleteTask = (id) => {
        execute("DELETE", protectedResources.Backend.endpoint + `/${id}`).then((response) => {
            if (response.status === 200 || response.status === 204) {
                const remainingTasks = tasks.filter(task => id !== task.id);
                setTasks(remainingTasks);
            }
        });
    }

    const handleEditTask = (id, description) => {
        const updatedTask = tasks.find((task) => id === task.id);
        updatedTask.description = description;

        execute('PUT', protectedResources.Backend.endpoint + `/${id}`, updatedTask).then((response) => {
            const updatedTasks = tasks.map((task) => {
                if (id === task.id) {
                    return { ...task, description: description };
                }
                return task;
            });
            setTasks(updatedTasks);
        });
    };

    const taskList = tasks.map((task) => {
        return <ToDoItem
            id={task.id}
            description={task.description}
            key={task.id}
            deleteTask={handleDeleteTask}
            editTask={handleEditTask}
        />
    });

    const listHeadingRef = useRef(null);
    const prevTaskLength = usePrevious(tasks.length);

    useEffect(() => {
        if (tasks.length - prevTaskLength === -1) {
            listHeadingRef.current.focus();
        }
    }, [tasks.length, prevTaskLength]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="data-area-div">
            <ToDoForm addTask={handleAddTask} />
            <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>{""}</h2>
            <ListGroup className="todo-list">
                {taskList}
            </ListGroup>
        </div>
    );
}
