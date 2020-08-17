import React, {useState} from 'react';

import List from "./components/content-list/list";
import CreateTask from "./components/create-task/create-task";
import data from './tempData';
import {generateID} from "./utilits";

const App = () => {
    const [todos, setTodos] = useState(data);
    const [isCheck, setCheck] = useState(false);
    const [form, setForm] = useState({
        select: '',
        text: '',
    });
    const [modal, setModal] = useState(false);

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        let newTodo = [...todos];
        if (form.select) {
            const element = newTodo.find(todo => todo.text === form.select)
            element.child.length > 3 ? alert('Вы больше не можете добавлять..') : element.child.push({
                checked: false,
                text: form.text,
                id: generateID()
            })
        } else {
            setTodos([...todos, {text: form.text, id: generateID(), checked: false, child: []}])
        }
        setModal(false)
    }
    const toggleChecked = (id) => {
        const todo = [...todos];
        let todoItem = todo.map(task => task.id === id ? {...task, checked: !task.checked} : task)
        setTodos(todoItem)
    };

    const toggleChildChecked = (element) => {
        const todo = [...todos];
        for (let todoItem of todo) {
            todoItem.child.forEach(elem => {
                if (elem.id === element.id) {
                    elem.checked = !elem.checked;
                }
            })
        }
        setTodos(todo)
    }
    const removeTodo = (id) => {
        const todoList = [...todos];
        let todoItem = todoList.filter(todo => todo.id !== id)
        setTodos(todoItem)
    }
    const removeChild = (id, index) => {
        const todo = [...todos];
        todo.forEach(todoItem => {
            todoItem.child = todoItem.child.filter(task => task.id !== id)
        })
        setTodos(todo)
    }
    return (
        <div className="todo-list">
            <div className="todo-list__content">
                <List
                    toggleChecked={toggleChecked}
                    todos={todos}
                    setModal={setModal}
                    removeTodo={removeTodo}
                    removeChild={removeChild}
                    toggleChildChecked={toggleChildChecked}
                    isCheckParent={isCheck}
                />
                <div className="todo-list__add-item">
                    <CreateTask
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        form={form}
                        todos={todos}
                        modal={modal}
                        setModal={setModal}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
