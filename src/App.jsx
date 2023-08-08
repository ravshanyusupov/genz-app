import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import PageNotFoundPage from "./pages/PageNotFoundPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PostDetailPage from "./pages/PostDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/post' element={<PostDetailPage/>}/>
                <Route path='/*' element={<PageNotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
