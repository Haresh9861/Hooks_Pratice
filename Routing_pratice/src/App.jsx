import { lazy,Suspense} from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(() => import('./Components/Dashboard'))
const Landing = React.lazy(() => import('./Components/Landing'))


function App() {


  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboards" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <button onClick={() => {
      navigate("/")
    }}>Landing page</button>
    <button onClick={() => {
      navigate("/dashboards")
    }}>Dashboards page</button>
  </div>

}

export default App
