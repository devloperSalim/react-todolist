import { useState } from "react";

function Form(){

    // const [formData , setFormData] = useState({
    //    name :"",
    //    age : ""
    // })
    // const [name , setName] = useState('');
    // const [age , setAge] = useState();


    // const inputValueChange =  () =>{

    //     const name = document.querySelector('#name').value
    //         setName(name);
    //     const age = document.querySelector('#age').value
    //         setAge(age);
    // }

    // const handlSubmit = (e) => {
    //     e.preventDefault()

    //     console.log(formData)
    // }


    //

    const [formData , setFormData] = useState({
        name :'',
        age :'',
        country : 'MR',
        genre : '',
        accept:false
    })

    const handleChange = (e) =>{
        const {name , type , value, checked} = e.target
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData , [name] : newValue
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log(formData)
    }

    return<>
              {JSON.stringify(formData)}

        <div className="container my-4 w-50">
        <form>
            {/* <input type="text" value={formData.name} name="name" onChange={(e) => setFormData({...formData , name : e.target.value})} placeholder="Name"/>
            <input type="number" value={formData.age} name="age" onChange={(e) => setFormData({...formData , age:e.target.value})} placeholder="age"/>
            <input type="submit" value='sumbit' onClick={handlSubmit}  /> */}

            <div className="form-group">
                <label>name</label>
                <input type="text" name="name" onChange={handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>age</label>
                <input type="number" name="age" onChange={handleChange}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>country</label>
                <select className="form-select" onChange={handleChange}  name="country">
                    <option value='Mr'>Maroc</option>
                    <option value='Cn'>Canada</option>
                    <option value='Usa'>Usa</option>
                </select>
            </div>
            <div className="my-2">
            <div className="form-check">
                <input type="radio" name="genre" onChange={handleChange}   className="form-check-input" />
                <label htmlFor="genre" className="from-check-input">Home</label>
            </div>
            <div className="form-check ">
                <input type="radio" name="genre" onChange={handleChange}   className="form-check-input" />
                <label htmlFor="genre_2" className="from-check-input">femme</label>
            </div>
            </div>
            <div className="form-check my-2">
                <input type="checkbox" name="accept" onChange={handleChange}  className="form-check-input" />
                <label htmlFor="accept" className="form-check-label">accept condition</label>
            </div>

            <div >
                <button onClick={handleSubmit}  className="btn btn-primary">add</button>
            </div>
        </form>
        </div>

        
        
    </>
}
export default Form;