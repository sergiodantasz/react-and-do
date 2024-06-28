import { TaskForm } from '@/components/TaskForm';
import { TaskList } from '@/components/TaskList';

export function Main() {
  return (
    <main className="mx-auto mb-auto flex w-full max-w-[1024px] flex-col gap-8 p-3 sm:gap-16">
      <TaskForm />
      <TaskList />
    </main>
  );
}
