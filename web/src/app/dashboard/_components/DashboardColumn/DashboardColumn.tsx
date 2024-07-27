import { CardTask } from "@/components/CardTask/CardTask";
import { HeaderColumn } from "../HeaderColumn/HeaderColumn";
import { TaskType } from "@/app/api/_server/tasks/tasks-server";
import { Droppable, Draggable } from "@hello-pangea/dnd";

export function TaskColumn({ title, tasks, droppableId }: { title: string; tasks: TaskType[], droppableId: string }) {
  return (
    <div className="dashboard-column">
      <HeaderColumn title={title} quantity={tasks.length} />
      <Droppable droppableId={droppableId} type='TASK' direction='vertical'>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="dashboard-column__wrapper">
            {tasks.map((item: TaskType, index: number) => (
              <Draggable key={item.id} draggableId={item.id as string} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="task-card"
                  >
                    <CardTask
                      id={item.id as string}
                      title={item.title}
                      description={item.description}
                      status={item.status}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

