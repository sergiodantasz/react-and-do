import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { addTask } from '@/features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

export type Task = {
  id: number;
  name: string;
  done: boolean;
};

export function TaskForm() {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.tasks);
  const [taskName, setTaskName] = useState('');
  function taskExists(taskName: string): boolean {
    for (const task of tasks) {
      if (task.name === taskName) return true;
    }
    return false;
  }
  function handleTaskFormOnSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (taskName.length === 0) {
      toast.error('Enter a name for the task.');
      return;
    }
    if (taskExists(taskName)) {
      toast.error('A task with this name already exists.');
      return;
    }
    setTaskName('');
    dispatch(
      addTask({
        id: new Date().getTime(),
        name: taskName,
        done: false,
      })
    );
    toast.success('Task added successfully.');
  }
  return (
    <form className="flex flex-col gap-1" onSubmit={handleTaskFormOnSubmit}>
      <h3 className="text-lg font-bold">What will you do?</h3>
      <input
        className="w-full border-x-0 border-b-2 border-t-0 border-b-stone-300 bg-transparent p-0 text-lg text-stone-700 transition-colors placeholder:text-stone-400 focus:border-b-stone-500 focus:ring-0 dark:border-b-stone-700 dark:text-stone-300 dark:placeholder:text-stone-600 dark:focus:border-b-stone-500"
        type="text"
        name="task-name"
        id="task-name"
        placeholder="I will..."
        value={taskName}
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
      />
    </form>
  );
}
