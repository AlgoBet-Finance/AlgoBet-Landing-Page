import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Algobet from 'pages/Algobet'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Algobet />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
