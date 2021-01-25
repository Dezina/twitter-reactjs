import { Modal, Button, Space } from 'antd';
import "antd/dist/antd.css";
import React, { useContext, useState, useEffect } from 'react'
import AdminnProductContext from '../context/AdminnProductContext/AdminProductContext';
import style from './AdminProducts.module.css'


const AdminProducts = () => {

    // ==================== CONTEXT ====================

    const context = useContext(AdminnProductContext)
    const { products, getProducts, addProduct, removeProduct, updateProduct } = context

    useEffect(() => {
        getProducts()
    }, [products])

    // ==================== STATES ====================

    const [visibleAdd, setVisible1] = useState(false);
    const [visibleEdit, setVisible2] = useState(false);

    const [id, setId] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [productName, setProductName] = useState('');


    // ==================== ADD FUNCTIONS ====================

    const addModal = () => {
        setVisible1(!visibleAdd)
        setCategoryName('')
        setProductName('')
    };

    const add = (categoryName, productName) => {
        setVisible1(!visibleAdd)
        addproduct(categoryName, productName)
    };

    const addproduct = (categoryName, productName) => {
        let products = {
            categoryName: categoryName,
            productName: productName
        }
        //console.log(products)
        addProduct(products)
    }

    // ==================== EDIT FUNCTIONS ====================

    const editModal = (id, categoryName, productName) => {
        setId(id)
        setCategoryName(categoryName)
        setProductName(productName)

        setVisible2(!visibleEdit)
    };

    const editProduct = (id) => {

        products[0].map(products => {
            if (products._id == id) {
                products.categoryName = categoryName
                products.productName = productName
                updateProduct(products, id)

            }
        })

        setVisible2(!visibleEdit)
        setCategoryName('')
        setProductName('')
        setId('')

    }

    // ==================== REMOVE FUNCTION ====================

    const deleteProduct = (id) => {
        removeProduct(id)
    }

    // ========================================================

    {
        if (products[0]) {
            return (
                <div>
                    <h2 className="text-center">Products</h2>

                    {/* {console.log(products)} */}

                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 well">
                            <ul className="nav navbar-nav">
                                <form className="navbar-form navbar-left">
                                    <div className="form-group">
                                        <input type="file" name="fileName" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </form>


                            </ul>
                            <ul className={`nav navbar-nav navbar-right ${style.add}`}>
                                <Space>
                                    <a href="#" className={`btn btn-success btn-sm`} onClick={addModal}>Add products</a>
                                    <a href="#" className={`btn btn-default btn-sm`}>Download</a>
                                </Space>

                            </ul>
                        </div>

                        <div className="col-md-8 col-md-offset-2">
                            {products[0].map(product => (
                                <div className="col-md-4">
                                    <div className="panel panel-info" key={product._id}>
                                        <div className="panel-heading">
                                            <Space className="pull-right">
                                                <span className={` ${style.icon}`}>
                                                    <i className="glyphicon glyphicon-edit pull-right" onClick={() => editModal(product._id, product.categoryName, product.productName)}></i>
                                                </span>
                                                <span className={` ${style.icon}`}>
                                                    <i className="glyphicon glyphicon-trash pull-right" onClick={() => deleteProduct(product._id)}></i>
                                                </span>
                                            </Space>

                                            <h3 className="panel-title">{product.categoryName}</h3>

                                        </div>
                                        <div className="panel-body">
                                            <p>{product.productName}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ==================== ADD MODAL ==================== */}

                        <Modal
                            visible={visibleAdd}
                            onOk={addModal}
                            onCancel={addModal}
                            footer={null}
                        >

                            <div className="page-header">
                                <h4>Add Product</h4>
                            </div>

                            <form method="post">
                                <fieldset>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="">Category name</label>
                                        <input
                                            type="text"
                                            name="categoryName"
                                            id="categoryName"
                                            value={categoryName}
                                            onChange={(e) => setCategoryName(e.target.value)}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="">Product name</label>
                                        <input
                                            type="text"
                                            name="productName"
                                            id="productName"
                                            value={productName}
                                            onChange={(e) => setProductName(e.target.value)}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <Space>
                                            <Button onClick={addModal}>
                                                Cancel
                                         </Button>
                                            <Button type="primary"
                                                onClick={() => add(categoryName, productName)}
                                            >
                                                Save
                                         </Button>
                                        </Space>
                                    </div>
                                </fieldset>
                            </form>
                        </Modal>

                        {/* ==================== EDIT MODAL ==================== */}

                        <Modal
                            visible={visibleEdit}
                            onOk={editModal}
                            onCancel={editModal}
                            footer={null}
                        >

                            <div className="page-header">
                                <h4>Edit Product</h4>
                            </div>

                            <form method="post"
                            // onSubmit={this.create}
                            >
                                <fieldset>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="">Category name</label>
                                        <input
                                            type="text"
                                            name="categoryName"
                                            id="categoryName"
                                            value={categoryName}
                                            onChange={(e) => setCategoryName(e.target.value)}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="">Product name</label>
                                        <input
                                            type="text"
                                            name="productName"
                                            id="productName"
                                            value={productName}
                                            onChange={(e) => setProductName(e.target.value)}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <Space>
                                            <Button onClick={editModal}>
                                                Cancel
                                    </Button>
                                            <Button type="primary"
                                                onClick={() => editProduct(id)}
                                            >
                                                Update
                                    </Button>
                                        </Space>
                                    </div>
                                </fieldset>
                            </form>
                        </Modal>

                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
}

export default AdminProducts
