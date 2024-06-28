import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAppSelector } from '@/hooks';
import { TaskActions } from '@/components/TaskActions';

export function TasksToDo() {
  const { tasks } = useAppSelector((state) => state.tasks);
  const tasksToDo = tasks.filter((task) => !task.done);
  if (tasksToDo.length === 0) {
    return (
      <div className="rounded-lg border border-stone-200 p-3 dark:border-stone-800">
        <p>The tasks to be done will be displayed here.</p>
      </div>
    );
  }
  return (
    <Table className="text-base">
      <TableHeader>
        <TableRow className="border-stone-200 dark:border-stone-800">
          <TableHead className="rounded-ss-lg">Name</TableHead>
          <TableHead className="rounded-se-lg">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasksToDo.map((task, index) => {
          return (
            <TableRow
              className="border-stone-200 dark:border-stone-800"
              key={task.id}
            >
              <TableCell
                className={
                  index === tasksToDo.length - 1 ? 'rounded-es-lg' : ''
                }
              >
                {task.name}
              </TableCell>
              <TableCell
                className={'w-[100px]'
                  .concat(' ')
                  .concat(
                    index === tasksToDo.length - 1 ? 'rounded-ee-lg' : ''
                  )}
              >
                <TaskActions task={task} tab="to-do" />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
