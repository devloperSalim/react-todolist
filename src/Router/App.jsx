import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Blogs from "./pages/Blogs"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
export default function App(){

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                    
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}