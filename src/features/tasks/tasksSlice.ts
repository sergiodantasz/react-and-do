import { Task } from '@/components/TaskForm';
import { createSlice } from '@reduxjs/toolkit';

export type TasksState = { tasks: Task[] };

export type TasksAction = {
  payload: Task;
  type: string;
};

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: TasksAction) => {
      const tasks = [action.payload, ...state.tasks];
      state.tasks = tasks;
    },
    deleteTask: (state, action: TasksAction) => {
      const tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      state.tasks = tasks;
    },
    markTaskAsDone: (state, action: TasksAction) => {
      const tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.done = true;
        }
        return task;
      });
      state.tasks = tasks;
    },
    markTaskAsToDo: (state, action: TasksAction) => {
      const tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.done = false;
        }
        return task;
      });
      state.tasks = tasks;
    },
  },
});

export const { addTask, deleteTask, markTaskAsDone, markTaskAsToDo } =
  tasksSlice.actions;

export default tasksSlice.reducer;
