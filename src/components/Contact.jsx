import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
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
                        <div>
                            <div className="contact-textarea d-flex justify-content-center">
                                <input className="contact-item" type="text" size="36" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                                <input className="contact-item" type="text" size="36" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                            </div>
                        </div>
                        <div className="contact-textarea">
                            <input type="text" size="76" name="subject" value={this.state.subject} onChange={this.handleChange} placeholder="Subject" />
                        </div>
                        <div className="contact-textarea">
                            <textarea rows="6" cols="75" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Message" />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}