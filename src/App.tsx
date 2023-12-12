import "./styles/main.css"
import { POSItems, POSSummary } from "./sections"


function App() {
  return (
    <div className="main-page">
      <div className="pos-sections-wrapper">

        <POSItems />
        <POSSummary />
      </div>
    </div>
  )
}

export default App
