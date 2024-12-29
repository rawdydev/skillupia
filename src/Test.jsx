import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import TestingComp from "./components/TestingComp"
import './index.css'


createRoot(document.getElementById("test")).render(
  <StrictMode>
    <TestingComp />
  </StrictMode>
)
