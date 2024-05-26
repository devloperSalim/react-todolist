import { Link, Outlet } from "react-router-dom";

export default function Layout(){

    return(
        <>
            <nav class="navbar-dark bg-primary nav justify-content-center ">
                <li className="nav-item">
                    <Link to='/' className="nav-link text-light">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/blogs' className="nav-link text-light">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className="nav-link text-light">Contact</Link>
                </li>
            </nav>

            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}