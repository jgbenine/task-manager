import { DashboardGrid } from './_components/DashboardGrid/DashboardGrid';
import { DashboardIntro } from './_components/DashboardIntro/DashboardIntro';
import './page.scss';

export default function Dashboard() {
  return (
    <main className="dashboard">
      <div className="containerMain">
        <DashboardIntro />
        <DashboardGrid />
      </div>
    </main>
  )
}
