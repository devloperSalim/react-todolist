export default function LangueSwitcher({onlanguagechange}){


    const handleChange = (e) =>{
        e.preventDefault()
        onlanguagechange(e.currentTarget.dataset.lang)
    }
    return<>
        <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a href="#" onClick={handleChange} className="nav-link"  data-lang="Ar">arabic</a>
                </li>
                <li className="nav-item">
                    <a href="#" onClick={handleChange}  className="nav-link" data-lang="EN">English</a>
                </li>
                <li className="nav-item">
                    <a href="#" onClick={handleChange}  className="nav-link" data-lang="TR">Turk</a>
                </li>
        </ul>
    </>
}