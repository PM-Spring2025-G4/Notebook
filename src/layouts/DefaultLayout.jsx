import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container px-4 py-8 mx-auto">{children}</main>
      <Footer />
    </div>
  )
}
