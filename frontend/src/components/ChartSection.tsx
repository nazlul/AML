import React from 'react'
import { PieChartIcon, LineChartIcon } from 'lucide-react'
export const ChartSection = () => {
  return (
    <div className="bg-gray-200 p-4 mb-4 rounded text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded">
          <h2 className="font-medium mb-2">Risk Alert Distribution</h2>
          <div className="bg-gray-100 p-8 flex flex-col items-center justify-center">
            <PieChartIcon size={40} className="text-blue-400 mb-2" />
            <p className="text-sm text-black">
              Pie Chart: High/Medium/Low Risk
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded">
          <h2 className="font-medium mb-2">Daily Alert Trend</h2>
          <div className="bg-gray-100 p-8 flex flex-col items-center justify-center">
            <LineChartIcon size={40} className="text-blue-400 mb-2" />
            <p className="text-sm text-black">
              Line Graph: 7-day Alert Trend
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
