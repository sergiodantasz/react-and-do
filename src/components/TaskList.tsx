import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TasksToDo } from '@/components/TasksToDo';
import { TasksDone } from '@/components/TasksDone';

export function TaskList() {
  return (
    <Tabs defaultValue="to-do">
      <TabsList className="grid h-fit w-full grid-cols-2">
        <TabsTrigger className="text-base font-bold" value="to-do">
          To do
        </TabsTrigger>
        <TabsTrigger className="text-base font-bold" value="done">
          Done
        </TabsTrigger>
      </TabsList>
      <TabsContent value="to-do">
        <TasksToDo />
      </TabsContent>
      <TabsContent value="done">
        <TasksDone />
      </TabsContent>
    </Tabs>
  );
}
