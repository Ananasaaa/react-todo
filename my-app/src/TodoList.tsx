import { useState } from 'react';
import { TodoListProps } from './utils/interfaces';

export function TodoList({ tasks, addTask, deleteTask }: TodoListProps) {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const handleAddTask = () => {
    addTask(value);
    setValue('');
  };

  return (
    <>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2 outline-none"
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span className="flex-1">{task.title}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
