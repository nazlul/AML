import React from 'react'

const alerts = [
  {
    id: 'AML-2024-001',
    type: 'Suspicious Transaction Pattern',
    date: '2024-01-15 12:23:45',
    riskScore: 9.2,
    riskLevel: 'HIGH',
    user: 'John Martinez',
    email: 'j.martinez@email.com',
    transaction: '$25,000',
    status: 'INVESTIGATING',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'AML-2024-002',
    type: 'Large Cash Transaction',
    date: '2024-01-15 13:45:32',
    riskScore: 7.8,
    riskLevel: 'HIGH',
    user: 'Sarah Johnson',
    email: 's.johnson@email.com',
    transaction: '$15,750',
    status: 'PENDING',
    statusColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'AML-2024-003',
    type: 'Multiple Small Deposits',
    date: '2024-01-15 12:18:33',
    riskScore: 6.4,
    riskLevel: 'MEDIUM',
    user: 'Michael Chen',
    email: 'm.chen@email.com',
    transaction: '$8,900',
    status: 'RESOLVED',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 'AML-2024-004',
    type: 'Cross-Border Transfer',
    date: '2024-01-15 11:52:17',
    riskScore: 8.9,
    riskLevel: 'HIGH',
    user: 'Emma Wilson',
    email: 'e.wilson@email.com',
    transaction: '$42,300',
    status: 'INVESTIGATING',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'AML-2024-005',
    type: 'Rapid Transaction Sequence',
    date: '2024-01-15 10:34:28',
    riskScore: 5.2,
    riskLevel: 'MEDIUM',
    user: 'David Rodriguez',
    email: 'd.rodriguez@email.com',
    transaction: '$12,100',
    status: 'PENDING',
    statusColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'AML-2024-006',
    type: 'Unusual Time Pattern',
    date: '2024-01-15 09:45:55',
    riskScore: 3.8,
    riskLevel: 'LOW',
    user: 'Lisa Anderson',
    email: 'l.anderson@email.com',
    transaction: '$3,200',
    status: 'RESOLVED',
    statusColor: 'bg-green-100 text-green-800'
  }
]

const getRiskScoreColor = (level: string) => {
  if (level === 'HIGH') return 'text-red-600 font-bold'
  if (level === 'MEDIUM') return 'text-orange-500 font-bold'
  return 'text-green-600 font-bold'
}

export const AlertsTable = () => {

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">AML Alerts Management</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Filters
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Export Data
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by user name, email, or alert ID..."
            className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Alert Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Risk Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Information
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {alerts.map((alert, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{alert.id}</div>
                    <div className="text-sm text-gray-600">{alert.type}</div>
                    <div className="text-xs text-gray-400">{alert.date}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className={`text-lg font-bold ${getRiskScoreColor(alert.riskLevel)}`}>
                      {alert.riskScore}
                    </span>
                    <span className={`text-xs font-medium ${getRiskScoreColor(alert.riskLevel)}`}>
                      {alert.riskLevel}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{alert.user}</div>
                    <div className="text-sm text-gray-600">{alert.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{alert.transaction}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${alert.statusColor}`}>
                    {alert.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button className="text-blue-600 hover:text-blue-900">View Details</button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-700">
          Showing 6 of 6 alerts
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-sm text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 text-sm text-white bg-blue-600 border border-blue-600 rounded">
            1
          </button>
          <button className="px-3 py-1 text-sm text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}