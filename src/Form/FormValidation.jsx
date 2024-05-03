import {  useRef, useState } from "react";

function FormValidation(){


    const fieldName = useRef();
    const fieldEmail = useRef();
    const fieldMessage = useRef();
    const fieldCountry = useRef();
    const acceptField = useRef();
    const [errors , setErrors] = useState([]);


    const formValidation = () =>{

        const name = fieldName.current.value;
        const email = fieldEmail.current.value;
        const message = fieldMessage.current.value;
        const country = fieldCountry.current.value;
        const accept = acceptField.current.checked;

        let isFormValid = true;
        if(name.trim() === ''){
            setErrors(prevState => {
                return [...prevState , 'field name is required']
            });
                isFormValid = false;
        }

        //email
        if(email.trim() === ''){
            setErrors(prevState => {
                return [...prevState , 'field email is required']
            });
            isFormValid = false;
        }else if(!email.match(/^\S+@\S+\.\S+$/)){
            setErrors(prevState => {
                return [...prevState , 'email forma is not valid']
            });

        isFormValid = false;
        }

        //message

        if(message.trim() === ''){
            setErrors(prevState => {
                return [...prevState , 'field message is required']
            });
            isFormValid = false;
        }

        //country
        if(country.trim() === ''){
            setErrors(prevState => {
                return [...prevState , 'field country is required']
            });
            isFormValid = false;
        }

        //accept
        if(!accept){
            setErrors(prevState => {
                return [...prevState , 'accept condition must be checked']
            });
          isFormValid = false
        }
            
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        setErrors([])
        formValidation()
        //

    }
 
    return<>
        <div className="container-fluid py-4 w-75">
            <h3>Form Contact</h3>
            <hr/>
            {errors.length > 0 ? 
                
                <div className="alert alert-danger" role='alert'>
                    <strong>Errors</strong>
                    <ul>{errors.map((error , key)=>{return<li key={key}>{error}</li>})}</ul>
                </div>
                :''
                }
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"  className="form-control" ref={fieldName}/>
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="text"  className="form-control" ref={fieldEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea id="exampleFormControlTextarea1" className="form-control" rows={3} ref={fieldMessage}></textarea>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <select className="form-select" ref={fieldCountry}>
                        <option value='Mar'>Maroc</option>
                        <option value='Usa'>USA</option>
                        <option value='Can'>Canada</option>
                    </select>
                </div>
                <div className="form-check py-2">
                    <input type="checkbox" id="accept" className="form-check-input" ref={acceptField}/>
                    <label htmlFor="accept">Accept Condition</label>
                </div>
                <div>
                    <button button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    </>
}
export default FormValidation;