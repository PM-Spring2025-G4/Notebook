import React from "react"
import { Button } from "../components/Button"

export const Home: React.FC = () => {
  const handleClick = () => alert("Buy me a coffee!")

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold text-blue-700">
        THIS IS OUR NOTEBOOK
      </h1>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  )
}
