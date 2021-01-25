// import { DownOutlined } from '@ant-design/icons';
import { Modal, Button, Space } from 'antd';
import "antd/dist/antd.css";
import React, { useContext, useState, useEffect } from 'react'
// import AdminnProductContext from '../context/AdminnProductContext/AdminProductContext';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Posts from './Posts';
import styles from './Twitter.module.css'; // Import css modules stylesheet as styles

import { Layout, Menu, Dropdown } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Twitter = () => {

    // ==================== CONTEXT ====================

    // const context = useContext(AdminnProductContext)
    // const { products, getProducts, addProduct, removeProduct, updateProduct } = context

    // useEffect(() => {
    //     getProducts()
    // }, [products])

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
        // addProduct(products)
    }

    // ==================== EDIT FUNCTIONS ====================

    const editModal = (id, categoryName, productName) => {
        setId(id)
        setCategoryName(categoryName)
        setProductName(productName)

        setVisible2(!visibleEdit)
    };

    // const editProduct = (id) => {

    //     products[0].map(products => {
    //         if (products._id == id) {
    //             products.categoryName = categoryName
    //             products.productName = productName
    //             updateProduct(products, id)

    //         }
    //     })

    //     setVisible2(!visibleEdit)
    //     setCategoryName('')
    //     setProductName('')
    //     setId('')

    // }

    // ==================== REMOVE FUNCTION ====================

    // const deleteProduct = (id) => {
    //     removeProduct(id)
    // }

    // ========================================================

    {
        // if (products[0]) {
        return (

            <div className="container-fluid">
                <div className="row">
                    {/* {console.log(products)} */}
                    {/* <div className="col-md-8 col-md-offset-2">
                            {products[0].map(product => (

                            ))}
                        </div> */}
                    <Router>
                        <div className={`col-md-3 ${styles.sidenav}`}>
                            Sidenav
                            <Link to="/posts">Home</Link>
                            <Link to="/">Explore</Link>
                            <Link to="/posts">Notifications</Link>
                            <Link to="/posts">Messages</Link>
                            <Link to="/posts">Bookmarks</Link>
                            <Link to="/posts">Lists</Link>
                            <Link to="/posts">Profile</Link>
                            <Link to="/posts">More</Link>

                            <button className={`${styles.tweetButton}`}>Tweet</button>
                        </div>

                        <div className="col-md-6">
                            Center
                            <Layout className={`${styles.content}`}>
                                <Content style={{ margin: '24px 16px 0' }}>
                                    <div style={{ minHeight: 780 }}>

                                        {/* ******** End Header code ******** */}

                                        {/* Code To Display The Screens */}
                                        <Switch>

                                            <Route path="/posts">
                                                <Posts />
                                            </Route>

                                        </Switch>
                                        {/* ******** End Display Screens ******** */}
                                    </div>
                                </Content>
                            </Layout>
                        </div>

                        <div className="col-md-3">
                            Right
                    </div>
                    </Router>
                </div>
            </div>

        )
        //}
    }

    // return (
    //     <div>
    //         <h1>Loading...</h1>
    //     </div>
    // );
}

export default Twitter
