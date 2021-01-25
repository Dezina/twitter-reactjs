<div className="row">
    {
        this.state.tweets.map(
            (tweet) => {
                return (
                    <div className="row">
                        <div className="col-md-2">
                            <img src={tweet.userimage} className="img-responsive" alt="" style={{ width: '60px', height: '60px', borderRadius: '50px' }} />
                        </div>
                        <div className="col-md-8">
                            <p>
                                {tweet.name}
                                <span>
                                    {tweet.username}
                                </span>
                            </p>
                            <p>
                                <img src={tweet.tweetimg} alt="" className="img-responsive" style={{ width: '400px', height: '230px', borderRadius: '10px' }} />
                            </p>
                        </div>
                    </div>
                )
            }
        )
    }

    <div className="col-md-7">
        <div className="row">
            <div className="col-md-2">
                <img src={this.state.userimage} alt="" className="img-responsive" style={{ width: '60px', height: '60px', borderRadius: '50px' }} />
            </div>
            <div className="col-md-10">
                <form method="post" onSubmit={this.onSubmit}>
                    <fieldset>
                        <div className="form-group col-md-12">
                            <textarea
                                name="tweet"
                                cols="30"
                                rows="10"
                                value={this.state.tweet}
                                style={{ fontSize: '20px' }}
                                className="form-control" />
                        </div>
                        <div className="form-group col-md-12">
                            <hr />
                            <input
                                type="submit"
                                value="Tweet"
                                className="btn pull-right"
                                style={{ backgroundColor: '#4479ec', borderRadius: '30px', width: '100px', color: '#fff' }} />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>

import Axios from 'axios'
import React, { Component } from 'react'

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: [],
            name: 'Dez',
            username: '@dezForb',
            tweet: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        Axios.get(`http://react999.herokuapp.com/twitter/tweets`)
            .then((res) => {
                const tweets = res.data;
                this.setState({
                    tweets
                });
                console.log(tweets);
            })
            .catch((err) => console.log(err))
    }

    onChange(e) {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const body = {
            name: this.state.name,
            tweet: this.state.tweet
        };

        Axios.post(`https://react999.herokuapp.com/twitter/add`, body)
            .then((result) => {
                alert('tweet sent')
                console.log(result)
            })
            .catch((err) => console.log(err));
    }
}
