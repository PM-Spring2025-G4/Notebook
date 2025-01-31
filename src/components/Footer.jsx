import React from "react"

export const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 py-2 text-center text-white bg-gray-800">
      <p>&copy; {new Date().getFullYear()} Group 4. All rights reserved.</p>
    </footer>
  )
}
