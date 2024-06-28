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

export function TasksDone() {
  const { tasks } = useAppSelector((state) => state.tasks);
  const tasksDone = tasks.filter((task) => task.done);
  if (tasksDone.length === 0) {
    return (
      <div className="rounded-lg border border-stone-200 p-3 dark:border-stone-800">
        <p>The tasks marked as done will be displayed here.</p>
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
        {tasksDone.map((task, index) => {
          return (
            <TableRow
              className="border-stone-200 dark:border-stone-800"
              key={task.id}
            >
              <TableCell
                className={
                  index === tasksDone.length - 1 ? 'rounded-es-lg' : ''
                }
              >
                {task.name}
              </TableCell>
              <TableCell
                className={'w-[100px]'
                  .concat(' ')
                  .concat(
                    index === tasksDone.length - 1 ? 'rounded-ee-lg' : ''
                  )}
              >
                <TaskActions task={task} tab="done" />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
