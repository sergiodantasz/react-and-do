import { combineSlices, configureStore } from '@reduxjs/toolkit';
import tasksSlice from '@/features/tasks/tasksSlice';
import { type Task } from '@/components/TaskForm';

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  const tasks = storedTasks ? JSON.parse(storedTasks) : [];
  return tasks;
}

const rootReducer = combineSlices(tasksSlice);

export function setupStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  return store;
}

export const store = setupStore({ tasks: { tasks: loadTasks() } });

store.subscribe(() => {
  const tasks = store.getState().tasks.tasks;
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
