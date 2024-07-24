import { CardTask } from '@/components/CardTask/CardTask';
import { Header } from "@/components/Header/Header";
import { DashboardIntroduction } from './_components/Introduction';
import './page.scss';
import { TaksServer, TaskType } from '../api/_server/tasks/tasks-server';
import { auth } from '../../../auth';


type PropsSession = {
  user: {
    id: string,
    email: string,
  }
}

export default async function Dashboard() {
  const session = await auth();
  const idUser = session?.user?.id as string;
  const tasks = await TaksServer.getTasksByUser(idUser) as TaskType[];

  const pendingTasks = tasks.filter(task => task.status === 'PENDING');
  const completedTasks = tasks.filter(task => task.status === 'COMPLETED');
  const inProgressTasks = tasks.filter(task => task.status === 'IN_PROGRESS');


  return (
    <main className="dashboard">
      <Header />
      <div className="dashboard__container">
        {session ? (
          <>
            <h3 className="dashboard__title">Welcome to your dashboard!</h3>
            <div className="dashboard__grid">
              <div className="dashboard-column">
                <DashboardIntroduction title='To do' quantity={4} />
                <div className="dashboard-column__wrapper">
                  {pendingTasks.map((item: TaskType) => (
                    <CardTask key={item.id} title={item.title} description={item.description} status={item.status} />
                  ))}
                </div>
              </div>

              <div className="dashboard-column">
                <DashboardIntroduction title='In progress' quantity={4} />
                <div className="dashboard-column__wrapper">
                  {inProgressTasks.map((item: any) => (
                    <CardTask key={item.id} title={item.title} description={item.description} status={item.status} />
                  ))}
                </div>
              </div>

              <div className="dashboard-column">
                <DashboardIntroduction title='Completed' quantity={4} />
                <div className="dashboard-column__wrapper">
                  {completedTasks.map((item: any) => (
                    <CardTask key={item.id} title={item.title} description={item.description} status={item.status} />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : <h4 className='dashboard__title'>Log in to view the dashboard</h4>}
      </div>
    </main>
  )
}
