import React from 'react'
import { Header } from './Header'
import { AlertCards } from './AlertCards'
import { NotificationPanel } from './NotificationPanel'
import { ChartSection } from './ChartSection'
import { InfoBoxes } from './InfoBoxes'
import { QuickActions } from './QuickActions'
import { AlertsTable } from './AlertsTable'
export const Dashboard = () => {
  return (
    <div className="flex-1 overflow-x-hidden">
      <Header />
      <div className="flex flex-col md:flex-row p-4 gap-4">
        <div className="flex-1">
          <AlertCards />
        </div>
        <NotificationPanel />
      </div>
      <div className="p-4">
        <ChartSection />
        <InfoBoxes />
        <QuickActions />
        <AlertsTable />
      </div>
    </div>
  )
}
