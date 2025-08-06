import React from 'react'
import { ImageIcon } from 'lucide-react'
export const AlertCards = () => {
  const cards = Array(6).fill(null)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-md p-8 flex justify-center items-center"
        >
          <div className="bg-blue-300 text-white p-4 rounded">
            <ImageIcon size={40} />
          </div>
        </div>
      ))}
    </div>
  )
}
