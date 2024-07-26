
import './page.scss';
import { DashboardGrid } from './_components/DashboardGrid/DashboardGrid';
import DashboardIntro from './_components/DashboardIntro/DashboardIntro';
import { SessionProvider } from 'next-auth/react';

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
