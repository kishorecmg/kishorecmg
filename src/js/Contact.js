import React from 'react'
import axios from 'axios'

import PersonRoundedIcon from '@material-ui/icons/PersonRounded'
import MailRoundedIcon from '@material-ui/icons/MailRounded'
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded'
import DescriptionIcon from '@material-ui/icons/Description'

class Contact extends React.Component
{
    constructor(props) 
    {
        super(props)
    
        this.state = {
          namae: '',
          emailId: '',
          subject: '',
          body: '',
          mailSent: false
        };
    }
    
      handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }
    
      handleSubmit = e => {
        e.preventDefault();

        const { namae, emailId, subject, body } = this.state
    
        const mailobject = { namae, emailId, subject, body }
    
        axios
          .post('/api/mailsend', mailobject)
        //   .post('http://localhost:5000/api/mailsend', mailobject)
          .then(this.setState({namae: '', emailId: '', subject: '', body: '', mailSent: true}))
          .catch(err => {
            this.setState({mailSent: false})
            console.error(err);
          })
    }

    render()
    {
        let currentLang = this.props.currentLanguage.contact

        let successMessage = <p className="contact-form-info-inter"></p>
        if(this.state.mailSent)
        {
            successMessage = <p className="contact-form-info-inter" style={{textAlign: 'center'}}>Mail sent successfully.</p>
        }

        return(
            <div className="container-fluid" id="contact-mainone">
                <h1 className="contact-heading">{currentLang.heading}</h1>
                <h5 className="contact-para">{currentLang.fillText} </h5>
                
                <form onSubmit={this.handleSubmit}>
                <div className="row contact-form-origin">
                    <div className="col-md-6">
                        <div className="contact-form">
                            <PersonRoundedIcon className="contact-form-icon" />
                            <input
                                    onChange={this.handleInputChange} 
                                    type="text"
                                    className="form-control"
                                    name="namae"
                                    placeholder="Enter your name *"
                                    value={this.state.namae}
                                    required
                                />
                            <MailRoundedIcon className="contact-form-icon"/>
                            <input
                                    onChange={this.handleInputChange} 
                                    type="email"
                                    className="form-control"
                                    name="emailId"
                                    placeholder="Enter your E-mail ID *"
                                    value={this.state.emailId}
                                    required
                                />
                            <SubjectRoundedIcon className="contact-form-icon"/>
                            <input
                                    onChange={this.handleInputChange} 
                                    type="text"
                                    name="subject"
                                    className="form-control"
                                    placeholder="Subject"
                                    value={this.state.subject}
                                />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-form">
                            <DescriptionIcon className="contact-form-icon" />
                            <textarea
                                onChange={this.handleInputChange} 
                                type="text"
                                name="body"
                                className="form-control contact-form-textarea"
                                placeholder="What are you thinking ?*"
                                value={this.state.body}
                                required
                                />
                        </div>
                    </div>

                    <button type="submit" className="contact-button" name="submit" id="submit-comment">Send E-mail</button>

                </div>
                </form>

                <div className="contact-form-info">
                    {successMessage}
                    <p className="contact-form-info-inter">Fields required are marked by *</p>
                    <p className="contact-form-info-inter">By entering your E-mail ID, you are sharing it to me.</p>
                </div>
               
                
            </div>
        )
    }
}

export default Contact