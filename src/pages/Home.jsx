import { Button } from "../components/Button"
import { DefaultLayout } from "../layouts/DefaultLayout"

export const Home = () => {
  const handleClick = () => alert("Buy me a coffee!")

  return (
    <DefaultLayout>
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-red-900">
          THIS IS OUR NOTEBOOK
        </h1>
        <Button label="Press Here" onClick={handleClick} />
      </div>
    </DefaultLayout>
  )
}
