import React, { Component, useContext, useState, useEffect } from 'react'
import axios from 'axios';
import styles from './Twitter.module.css'; // Import css modules stylesheet as styles


export default class Posts extends Component {

    // ==================== STATES & FUNCTIONS ====================
    constructor(props) {
        super(props)
        this.state = {

            tweets: [],

            name: 'Dez',
            username: '@dezForb',
            password: '',
            userimage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--y7yA7Q_4--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/364578/7e10fbaf-2b95-444a-8425-0fc5b8d91187.jpg',
            tweet: '',
            tweetimg: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

        axios.get(`https://react999.herokuapp.com/twitter/tweets`)
            .then((res) => {
                const tweets = res.data;
                this.setState({
                    tweets,

                });
                console.log(tweets);
            })
            .catch((err) => console.log(err));
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const body = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            userimage: this.state.userimage,
            tweet: this.state.tweet,
            tweetimg: this.state.tweetimg
        };
        //console.log('update', body);
        axios.post(
            `https://react999.herokuapp.com/twitter/add`,
            body
        )
            .then((result) => {
                alert('tweet sent');
                console.log(result);
                // window.location = 'http://localhost:3000/dashboard';
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (

            <div className="container" >
                <div className="row">

                    <div className={`col-md-7 ${styles.title}`}>
                        Home
                    <hr />
                    </div>
                </div>

                {/* TWEET */}
                <div className="col-md-7">

                    <div className="row">
                        <div className="col-md-2">
                            <img src={this.state.userimage} className="img-responsive" alt="" style={{ width: '60px', height: '60px', borderRadius: '50px' }} />
                        </div>
                        <div className="col-md-10">
                            <form method="post" onSubmit={this.onSubmit}>
                                <fieldset>

                                    <div className="form-group col-md-12">

                                        <textarea
                                            name="tweet"
                                            placeholder="What's happening?"
                                            className="form-control"
                                            value={this.state.tweet}
                                            onChange={this.onChange}
                                            rows={1}
                                            cols={25}
                                            style={{ fontSize: '20px' }}
                                        />

                                    </div>

                                    <div className="form-group col-md-12">
                                        <hr />
                                        <input
                                            type="submit"
                                            value="Tweet"
                                            className="btn pull-right"
                                            style={{ backgroundColor: '#4479ec', borderRadius: '30px', width: '100px', color: '#fff' }}
                                        />
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                    </div>

                </div>

                <div className="col-md-7">
                    {this.state.tweets.map(
                        (tweet) => {
                            return (

                                <div className="row">

                                    {/* DISPLAY TWEETS */}
                                    <div className="col-md-2">
                                        <img src={tweet.userimage} className="img-responsive" alt="" style={{ width: '60px', height: '60px', borderRadius: '50px' }} />
                                    </div>
                                    <div className="col-md-8">
                                        <p>
                                            {tweet.name} <span>{tweet.username}</span></p>
                                        <p>{tweet.tweet}</p>
                                        <p>
                                            <img src={tweet.tweetimg} className="img-responsive" alt="" style={{ width: '400px', height: '230px', borderRadius: '10px' }} />
                                        </p>

                                    </div>

                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}
