import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e,) {
        const target = e.target;
        const name = target.name
        const value = e.target.value
        this.setState({[name]: value})
    }

    handleSubmit(e) {
        alert('Message: ' + this.state.message);
        e.preventDefault();
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        return (
            <div className="contact-container">
                <div className="contact-title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-content">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <span>Name: </span>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>
                            <span>Email: </span>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>
                            <span>Message: </span>
                            <br />
                            <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
                        </label>
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}