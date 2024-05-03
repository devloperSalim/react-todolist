function FormValidation(){


    

    return<>
        <div className="container-fluid py-4 w-75">
            <h3>Form Contact</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"  className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email"  className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea id="exampleFormControlTextarea1" className="form-control" rows={3}></textarea>
                </div>
                <div className="form-check py-2">
                    <input type="checkbox" id="accept" className="form-check-input"/>
                    <label htmlFor="accept">Accept Condition</label>
                </div>
            </form>
        </div>
    </>
}
export default FormValidation;