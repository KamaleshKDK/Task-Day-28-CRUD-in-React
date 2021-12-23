import React from 'react'
import { useFormik } from 'formik';

function Userform() {

    const formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            office: "",
            age: 0,
            startDate: "",
            salary: ""
        },
        onSubmit: async values => {
            try {
                await fetch("https://61c1f80d9dbcca0017c82272.mockapi.io/Users", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                alert(" Your Data Saved")



            } catch (error) {
                console.log(error)

            }
        }
    })

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" style={{ fontWeight: "600" }}>User Form</h1>
            </div>
            <div className='contianer'>
                <form onSubmit={formik.handleSubmit} >
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label style={{ color: 'black', opacity: "100%" }}>Name</label>
                            <input type="text" name='name' onChange={formik.handleChange}
                                value={formik.values.name} className='form-control'></input>
                        </div>
                        <div className='col-lg-6'>
                            <label style={{ color: 'black', opacity: "100%" }}>Position</label>
                            <input type="text" name='position' onChange={formik.handleChange}
                                value={formik.values.position} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label style={{ color: 'black', opacity: "100%" }}>Office</label>
                            <input type="text" name='office' onChange={formik.handleChange}
                                value={formik.values.office} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label style={{ color: 'black', opacity: "100%" }}>Age</label>
                            <input type="number" name='age' onChange={formik.handleChange}
                                value={formik.values.age} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label style={{ color: 'black', opacity: "100%" }}>Start Date</label>
                            <input type="date" name='startdate' onChange={formik.handleChange}
                                value={formik.values.startDate} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label style={{ color: 'black', opacity: "100%" }}>Salary</label>
                            <input type="number" name='salary' onChange={formik.handleChange}
                                value={formik.values.salary} className='form-control'></input>
                        </div>
                        <div className='col-lg-12 mt-3'>
                            <input type="submit" className='btn btn-primary'></input>
                        </div>
                    </div>
                </form>
            </div>

        </>

    )
}

export default Userform
