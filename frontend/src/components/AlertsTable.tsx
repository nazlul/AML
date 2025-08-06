import React from 'react'
export const AlertsTable = () => {
  const headers = [
    'Alert Details',
    'Risk Score',
    'User Information',
    'Transaction',
    'Status',
    'Actions',
  ]
  return (
    <div>
      <h2 className="text-xl text-black font-medium mb-4 text-center">
        AML Alerts Management
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-50">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-left text-sm font-medium text-black border-b"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Empty rows for placeholder */}
            {Array(6)
              .fill(null)
              .map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b hover:bg-gray-50">
                  {Array(6)
                    .fill(null)
                    .map((_, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-4 text-sm text-black"
                      >
                        &nbsp;
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
