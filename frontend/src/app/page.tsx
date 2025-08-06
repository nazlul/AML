import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Dashboard } from '../components/Dashboard'

export default function HomePage() {
  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      <Sidebar />
      <Dashboard />
    </div>
  )
}
