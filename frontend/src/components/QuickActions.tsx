import React from 'react'
import { Users, Bell, FileText, Download } from 'lucide-react'

export const QuickActions = () => {
  const actions = [
    {
      icon: <Users size={20} />,
      title: 'Manage Users',
      description: 'View all registered users',
    },
    {
      icon: <Bell size={20} />,
      title: 'View AML Alerts',
      description: 'Review security alerts',
    },
    {
      icon: <FileText size={20} />,
      title: 'Investigator Notes',
      description: 'Review case notes',
    },
    {
      icon: <Download size={20} />,
      title: 'Download Reports',
      description: 'Export data reports',
    },
  ]
  return (
    <div className="mb-6 text-black">
      <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className="bg-white p-4 border border-gray-200 rounded"
          >
            <div className="flex items-start">
              <div className="mr-3 text-black">{action.icon}</div>
              <div>
                <h3 className="font-medium text-sm">{action.title}</h3>
                <p className="text-xs text-black">{action.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
