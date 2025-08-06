import React from 'react'
export const InfoBoxes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
      {[1, 2, 3].map((box) => (
        <div key={box} className="bg-white p-6 rounded border border-gray-200">
          &nbsp;
        </div>
      ))}
    </div>
  )
}
