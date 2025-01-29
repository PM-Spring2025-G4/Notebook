import React from "react"

export const Header = () => {
  return (
    <header className="p-5 text-center text-white bg-gray-800">
      <h1 className="m-0 text-2xl">Teh NotEbOoK</h1>
      <nav>
        <ul className="flex justify-center p-0 list-none">
          <li className="mx-4">
            <a href="#home" className="text-white no-underline">
              Home
            </a>
          </li>
          <li className="mx-4">
            <a href="#about" className="text-white no-underline">
              About
            </a>
          </li>
          <li className="mx-4">
            <a href="#content" className="text-white no-underline">
              Content
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
