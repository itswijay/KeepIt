import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { Button } from "./components/ui/button"

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main className="flex-1 flex" />
      <Footer />
    </div>
    </>
  )
}

export default App
