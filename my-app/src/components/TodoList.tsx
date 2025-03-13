import { useState } from 'react';
import { Task } from './utils/interfaces';
import { TodoForm } from './TodoForm';

interface TodoListProps {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  isTaskDone: (id: number) => void;
  editTask: (id: number, newTitle: string) => void;
}

export function TodoList({
  tasks,
  addTask,
  deleteTask,
  isTaskDone,
  editTask,
}: TodoListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState('');

  const handleEdit = (task: Task) => {
    setEditingId(task.id);
    setNewTitle(task.title);
  };

  const handleSave = (id: number) => {
    editTask(id, newTitle);
    setEditingId(null);
  };
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="pb-5">ToDo List</h1>
      <TodoForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => isTaskDone(task.id)}
            />
            {editingId === task.id ? (
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="border p-1 flex-1"
              />
            ) : (
              <span>{task.title}</span>
            )}
            {editingId === task.id ? (
              <button
                onClick={() => handleSave(task.id)}
                className="text-green-500"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(task)}
                className="text-blue-500"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
