import React, { useState, useEffect } from "react";

function Task({ task, index, onDeleteTask, onChangeStatus }) {
    const taskStyle = {
      textDecoration: task.completed ? "line-through" : "none",
    };
  
    return (
      <div className="task">
        <div style={taskStyle}>
        <input type='checkbox' data-testid={`checkbox-${index}`} onChange={onChangeStatus} checked={task.completed}/> {task.title} - {task.completed.toString()}   
        <button onClick={onDeleteTask} data-testid='deletion'>X</button>
        <button data-testid='editing'>Edit</button>
        </div>
      </div>
    );
  }

function CreateTask({ onAddTask }) {
    const [newTask, setNewTask] = useState(""); // Хранение введенной пользователем задачи
  
    const handleInputChange = (e) => {
      setNewTask(e.target.value); // Обновление состояния при изменении ввода
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Предотвращаем стандартное поведение формы
      onAddTask(newTask); // Вызываем функцию из родительского компонента для добавления задачи
      setNewTask(""); // Сброс введенной задачи после добавления
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="answer"
          className="input-task-body"
          placeholder="input task"
          value={newTask} // Значение ввода
          onChange={handleInputChange} // Обработчик изменения ввода
        />
        <button type="submit" data-testid='adding'>Add task</button>
      </form>
    );
  }

function ToDo () {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
});

    const addTask = (newTask) => {
        if (newTask) {
          setTasks([...tasks, { title: newTask, completed: false }]);
        }
      };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
      };

    // const editTitle = (index, text) => {
    //     const Tasks = [...tasks];
    //     Tasks[index].
    //   }

      // Сохраняем список задач в локальное хранилище при изменении tasks
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className='todo-container'>
            <div className="header">TODO</div>
            <div className="tasklist">
                {tasks.map((task, index) => (
                    <Task
                        task= {task}
                        index= {index + 1}
                        key= {index}
                        onDeleteTask={() => deleteTask(index)}
                        onChangeStatus={() => editStatus(index)}
                        // data-testid= {index + 1}
                    />
                ))}
            </div>
            <div className="create-task">
            <CreateTask onAddTask={addTask} />
            </div>
        </div>
    )
}

export default ToDo;