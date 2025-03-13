import { useState } from 'react';

type TodoFormProps = {
  addTask: (title: string) => void;
};

export function TodoForm({ addTask }: TodoFormProps) {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleAddTask = () => {
    addTask(value);
    setValue('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex gap">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full p-2 border rounded mb-2 outline-none"
      />
      <button onClick={handleAddTask} className="ml-4">
        Add
      </button>
    </div>
  );
}
