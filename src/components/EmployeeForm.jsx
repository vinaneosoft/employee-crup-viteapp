


function EmployeeForm(){
    return(
        <>
         <h4 className="text-center">EMPLOYEE INPUT FORM</h4>
         <div className="d-flex justify-content-center p-3">
            <form className="bg-secondary w-50 p-3" >
                <div className="mb-3">
                    <label  className="form-label">ID</label>
                    <input type="text"  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text"  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">PROFILE</label>
                    <input type="text"  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">SHORT DESCRIPTION</label>
                    <input type="text"  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">DEPARTMENT ID</label>
                    <input type="text"  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">EXPERIENCE</label>
                    <input type="text"  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">JOINING DATE</label>
                    <input type="text"  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">PROFILE PIC LINK</label>
                    <input type="text"  className="form-control"/>
                </div>
                <button type="submit" className="mx-3 btn btn-primary">ADD</button>
                <button type="reset" className="btn btn-primary">RESET</button>
            </form>
        </div>
        </>
    );
}

export default EmployeeForm;