import { CardTask } from "@/components/CardTask/CardTask";
import { HeaderColumn } from "../HeaderColumn/HeaderColumn";
import { TaskType } from "@/app/api/_server/tasks/tasks-server";

export function TaskColumn({title, tasks }: { title: string; tasks: TaskType[] }) {
  return (
    <div className="dashboard-column">
      <HeaderColumn title={title} quantity={tasks.length} />
      <div className="dashboard-column__wrapper">
        {tasks.map((item: TaskType) => (
          <CardTask key={item.id} id={item.id} title={item.title} description={item.description} status={item.status} />
        ))}
      </div>
    </div>
  );
}