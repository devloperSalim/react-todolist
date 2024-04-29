import { useState } from "react";

function Form(){

    const [formData , setFormData] = useState({
       name :"",
       age : ""
    })
    const [name , setName] = useState('');
    const [age , setAge] = useState();


    // const inputValueChange =  () =>{

    //     const name = document.querySelector('#name').value
    //         setName(name);
    //     const age = document.querySelector('#age').value
    //         setAge(age);
    // }

    const handlSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    return<>
        <form>
        <input type="text" value={formData.name} name="name" onChange={(e) => setFormData({...formData , name : e.target.value})} placeholder="Name"/>
            <input type="number" value={formData.age} name="age" onChange={(e) => setFormData({...formData , age:e.target.value})} placeholder="age"/>
            <input type="submit" value='sumbit' onClick={handlSubmit}  />
        </form>
    </>
}
export default Form;