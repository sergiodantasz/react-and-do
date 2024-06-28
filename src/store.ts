import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '@/features/tasks/tasksSlice';
import { type Task } from '@/components/TaskForm';

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  const tasks = storedTasks ? JSON.parse(storedTasks) : [];
  return tasks;
}

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: { tasks: loadTasks() },
  },
});

store.subscribe(() => {
  const tasks = store.getState().tasks.tasks;
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
