import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Productlist() {
    const [products, setproducts] = useState([])

    useEffect(async () => {
        try {
            let productDetail = await fetch("https://61c1f80d9dbcca0017c82272.mockapi.io/product")
            let productData = await productDetail.json()
            setproducts(productData)
        } catch (error) {
            console.log(error)
        }
    }, [])
    var deleteProduct = (async (id) => {
        let result = await fetch(`https://61c1f80d9dbcca0017c82272.mockapi.io/product/${id}`, {
            method: 'DELETE',
        });
        let produtDetail = await fetch("https://61c1f80d9dbcca0017c82272.mockapi.io/product")
        let produtData = await produtDetail.json()
        setproducts(produtData)
    })


    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" style={{ fontWeight: "700" }}>product List</h1>
                <Link to='/productform' className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i>
                </i> Create product</Link>
            </div>
            <div className="container-fluid">


                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr style={{ color: "black", opacity: "85%" }}>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Company</th>
                                        <th>Warranty</th>
                                        <th>Manufacturing Date</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Customize</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        products.map((pro, index) => {
                                            return <tr key={index}>
                                                <td>{pro.id}</td>
                                                <td>{pro.name}</td>
                                                <td>{pro.company}</td>
                                                <td>{pro.warranty}</td>
                                                <td>{pro.manufacturingdate}</td>
                                                <td>{pro.quantity}</td>
                                                <td>{pro.price}</td>

                                                <th>
                                                    <Link to={`/product-edit/${pro.id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link>
                                                    <button  onClick={()=>deleteProduct(pro.id)} className='btn btn-danger btn-sm ml-2'>Delete</button>
                                                </th>

                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Productlist
