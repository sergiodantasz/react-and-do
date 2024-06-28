import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, SquareCheck, SquareMinus, Trash } from 'lucide-react';
import { Task } from '@/components/TaskForm';
import { useAppDispatch } from '@/hooks';
import {
  deleteTask,
  markTaskAsDone,
  markTaskAsToDo,
} from '@/features/tasks/tasksSlice';
import { toast } from 'sonner';

type TaskActionsProps = {
  task: Task;
  tab: 'to-do' | 'done';
};

export function TaskActions({ task, tab }: TaskActionsProps) {
  const dispatch = useAppDispatch();
  function handleDelete() {
    dispatch(deleteTask(task));
    toast.success('Task deleted successfully.');
  }
  function handleMarkAsDone() {
    dispatch(markTaskAsDone(task));
    toast.success('Task marked as done.');
  }
  function handleMarkAsToDo() {
    dispatch(markTaskAsToDo(task));
    toast.success('Task marked as to do.');
  }
  const isToDoTab = tab === 'to-do';
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'icon'} className="size-8">
          <Ellipsis className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            isToDoTab ? handleMarkAsDone() : handleMarkAsToDo();
          }}
        >
          {isToDoTab ? (
            <SquareCheck className="mr-2 size-4" />
          ) : (
            <SquareMinus className="mr-2 size-4" />
          )}
          <span>{isToDoTab ? 'Mark as done' : 'Mark as to do'}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            handleDelete();
          }}
        >
          <Trash className="mr-2 size-4" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
