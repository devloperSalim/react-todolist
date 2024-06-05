import React, { useEffect, useRef, useState } from "react";

export default function FormList() {
  const nameRef = useRef();
  const ageRef = useRef();
  const countryRef = useRef();
  const genderMaleRef = useRef();
  const genderFemaleRef = useRef();
  const acceptRef = useRef();

  const [formData, setFormData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const gender = genderMaleRef.current.checked ? 'Home' : 'Femme';
    const newSubmission = {
      id: Date.now().toString(),
      name: nameRef.current.value,
      age: ageRef.current.value,
      country: countryRef.current.value,
      gender: gender,
      accept: acceptRef.current.checked,
    };
    setFormData([...formData, newSubmission]);
    resetForm();
  };

  const resetForm = () => {
    nameRef.current.value = '';
    ageRef.current.value = '';
    countryRef.current.value = 'Mr';
    genderMaleRef.current.checked = false;
    genderFemaleRef.current.checked = false;
    acceptRef.current.checked = false;
  };

  useEffect(() => {
    nameRef.current.value = 'salim';
    ageRef.current.value = 24;
    ageRef.current.focus();
  }, []);

  return (
    <>
      <div className="container my-4 w-50">
        <h1>Form with Various Input Types</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" ref={nameRef} className="form-control" />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" name="age" ref={ageRef} className="form-control" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <select className="form-select" ref={countryRef} name="country">
              <option value="Mr">Maroc</option>
              <option value="Cn">Canada</option>
              <option value="Usa">USA</option>
            </select>
          </div>
          <div className="my-2">
            <div className="form-check">
              <input type="radio" name="genre" value="Home" ref={genderMaleRef} className="form-check-input" />
              <label htmlFor="genre" className="form-check-label">Home</label>
            </div>
            <div className="form-check">
              <input type="radio" name="genre" value="Femme" ref={genderFemaleRef} className="form-check-input" />
              <label htmlFor="genre_2" className="form-check-label">Femme</label>
            </div>
          </div>
          <div className="form-check my-2">
            <input type="checkbox" name="accept" ref={acceptRef} className="form-check-input" />
            <label htmlFor="accept" className="form-check-label">Accept conditions</label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>

      <div className="container my-4 w-75">
        <h2>Submissions</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Accept</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.name}</td>
                <td>{submission.age}</td>
                <td>{submission.country}</td>
                <td>{submission.gender}</td>
                <td>{submission.accept ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={()=>{
                    setFormData(
                      formData.filter(data => data.id !== submission.id)
                    )
                  }} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
