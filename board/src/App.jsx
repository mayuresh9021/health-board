import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
//import Transactions from "./pages/Dashboard/components/Transactions";
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path:"/transactions",
    element:<Transaction></Transaction>,
  },
  {
    path:"/support",
    element:<Support></Support>
  },
  {
    path:"/signin",
    element:<h1>SignIn</h1>
  }
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
