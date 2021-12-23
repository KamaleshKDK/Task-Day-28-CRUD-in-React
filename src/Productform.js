import React from 'react'
import { useFormik } from 'formik';

function Productform() {

    const formik = useFormik({
        initialValues: {
            name: '',
            company: '',
            warranty: '',
            manufacturingdate: '',
            quantity: '',
            price: ''
        },

        onSubmit: async values => {
            try {
                await fetch("https://61c1f80d9dbcca0017c82272.mockapi.io/product", {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                alert("Your Product is Saved")
                
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" style={{ fontWeight: "600" }}>Product Form</h1>
            </div>
            <div className='contianer'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label style={{ color: 'black', opacity: "100%" }}>Name</label>
                            <input type="text" name='name' onChange={formik.handleChange}
                                values={formik.values.name}
                                className='form-control'></input>
                        </div>
                        <div className='col-lg-6'>
                            <label style={{ color: 'black', opacity: "100%" }}>Company</label>
                            <input type="text" name='company' onChange={formik.handleChange}
                                values={formik.values.company}
                                className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label style={{ color: 'black', opacity: "100%" }}>Warranty</label>
                            <input type="number" name='warranty' onChange={formik.handleChange}
                                values={formik.values.warranty} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label style={{ color: 'black', opacity: "100%" }}>Manufacturing Date</label>
                            <input type="date" name='manufacturingdate' onChange={formik.handleChange}
                                values={formik.values.manufacturingdate} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label style={{ color: 'black', opacity: "100%" }}>Quantity</label>
                            <input type="number" name='quantity' onChange={formik.handleChange}
                                values={formik.values.quantity} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label style={{ color: 'black', opacity: "100%" }}>Price</label>
                            <input type="number" name='price' onChange={formik.handleChange}
                                values={formik.values.price} className='form-control'></input>
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

export default Productform
