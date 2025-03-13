import { useState } from 'react';
import { Task } from './utils/interfaces';

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const isTaskDone = (id: number) => {
    const updateTasks = [...tasks];
    const task = updateTasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      setTasks(updateTasks);
    }
  };

  const editTask = (id: number, newTitle: string) => {
    const task = tasks.find((t) => t.id === id);
    if (task) task.title = newTitle;
    setTasks([...tasks]);
  };

  return { tasks, addTask, deleteTask, isTaskDone, editTask };
}
