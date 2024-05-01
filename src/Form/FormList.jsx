
import { useEffect, useRef, useState } from "react"

export default function FormList(){

    const nameRef = useRef();
    const ageRef = useRef();
    const countryRef = useRef();
    const genderRef = useRef()
    const acceptRef = useRef()

    const [formData , setFormData] = useState({})

    const handleSubmit = (e) =>{

        e.preventDefault()
        setFormData({
            name:nameRef.current.value,
            age:ageRef.current.value,
            country:countryRef.current.value,
            gender: genderRef.current.checked ? 'Femme' : 'Home',
            accept:acceptRef.current.checked

        })
        console.log(formData)
    }


    useEffect(()=>{
        nameRef.current.value = 'salim'
        ageRef.current.value=24
        ageRef.current.focus()
        
    })

    return(
        <>
        <div className="container my-4 w-50">
        {JSON.stringify(formData)}
        <hr/>
            <form>

                <div className="form-group">
                    <label>name</label>
                    <input type="text" name="name" ref={nameRef}  className="form-control"/>
                </div>
                <div className="form-group">
                    <label>age</label>
                    <input type="number" name="age" ref={ageRef} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>country</label>
                    <select className="form-select" ref={countryRef} name="country">
                        <option value='Mr'>Maroc</option>
                        <option value='Cn'>Canada</option>
                        <option value='Usa'>Usa</option>
                    </select>
                </div>
                <div className="my-2">
                <div className="form-check">
                    <input type="radio" name="genre" ref={genderRef}   className="form-check-input" />
                    <label htmlFor="genre" className="from-check-input">Home</label>
                </div>
                <div className="form-check ">
                    <input type="radio" name="genre" ref={genderRef} className="form-check-input" />
                    <label htmlFor="genre_2" className="from-check-input">femme</label>
                </div>
                </div>
                <div className="form-check my-2">
                    <input type="checkbox" name="accept" ref={acceptRef}   className="form-check-input" />
                    <label htmlFor="accept" className="form-check-label">accept condition</label>
                </div>

                <div >
                    <button onClick={handleSubmit}  className="btn btn-primary">add</button>
                </div>
            </form>
        </div>

        </>
    )
}