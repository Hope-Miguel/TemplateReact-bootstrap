import {
  Routes,
  Route
} from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home/Home';


function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
