import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoList } from './components/TodoList';
import { TaskManager } from './components/TaskManager';
import { TodoForm } from './components/TodoForm';
import { Link } from 'react-router-dom';

function App() {
  const { tasks, addTask, deleteTask, isTaskDone, editTask } = TaskManager();

  return (
    <Router>
      <div className="mb-4">
        <Link to="/" className="mr-4">
          Form
        </Link>
        <Link to="/tasks">Tasks</Link>
      </div>
      <Routes>
        <Route path="/" element={<TodoForm addTask={addTask} />} />
        <Route
          path="/tasks"
          element={
            <TodoList
              tasks={tasks}
              addTask={addTask}
              deleteTask={deleteTask}
              isTaskDone={isTaskDone}
              editTask={editTask}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
