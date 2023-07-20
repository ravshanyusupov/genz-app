import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
