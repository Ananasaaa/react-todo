export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
export interface TodoListProps {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
}
