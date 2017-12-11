import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            _replyto: '',
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
        let objectToSend = {
            name: this.state.name,
            _replyto: this.state.replyto,
            subject: this.state.subject,
            message: this.state.message
        }

        this.sendContactForm(objectToSend)
        e.preventDefault();
        this.setState({
            name: '',
            _replyto: '',
            subject: '',
            message: ''
        })
    }

    sendContactForm(data) {
        const init = {
            method: "POST",
            body: data
        }

        const url = 'https://script.google.com/a/kevindahlberg.com/macros/s/AKfycbxrYhUjbxkoGW-BsGLHYf-cSKxe7vAYJpmayOBqmeADVxQ8Dy8/exec'

        fetch(url , init);
    }

    render() {
        return (
            <div className="contact-container">
                <div className="contact-title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-content">
                    <form action="https://formspree.io/kevin@kevindahlberg.com" method="POST">
                        <div>
                            <div className="contact-textarea d-flex justify-content-center">
                                <input className="contact-item" type="text" size="36" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                                <input className="contact-item" type="text" size="36" name="_replyto" value={this.state._replyto} onChange={this.handleChange} placeholder="Email" />
                            </div>
                        </div>
                        <div className="contact-textarea">
                            <input type="text" size="76" name="subject" value={this.state.subject} onChange={this.handleChange} placeholder="Subject" />
                        </div>
                        <div className="contact-textarea">
                            <textarea rows="6" cols="75" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Message" />
                        </div>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        )
    }
}