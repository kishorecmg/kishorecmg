import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'


import PersonRoundedIcon from '@material-ui/icons/PersonRounded'
import MailRoundedIcon from '@material-ui/icons/MailRounded'
import DescriptionIcon from '@material-ui/icons/Description'

class CommentForm extends React.Component
{
    constructor(props) {
        super(props);
    
        this.state = {
          namae: '',
          emailId: '',
          body: '',
          time: ''
        };
      }
    
      handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
    
        let time = new Date().toString()

        const { namae, emailId, body } = this.state
    
        const commentobj = { namae, emailId, body, time }
    
        axios
          .post('/api/post', commentobj)
          .then(this.setState({namae: '', emailId: '', body: ''}))
          .catch(err => {
            console.error(err);
          });
        
          const cookies = new Cookies()
          cookies.set('commented', true, { path: '/' })
      };
    
    render()
    {
      let commentEnter
      let currentLanguage = this.props.displayLanguage
      
      const cookies = new Cookies()
  
      if(cookies.get('commented'))
      {
          commentEnter = <p className="comment-already">{currentLanguage.alreadyEntered}</p>
      }
      else
      {  
          commentEnter = <button type="submit" className="comment-button" name="submit" id="submit-comment">{currentLanguage.commentButton}</button>
      }

      return(
            <div className="comment-form">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                      <div className="contact-form">
                        <PersonRoundedIcon className="contact-form-icon" />
                        <input 
                            onChange={this.handleInputChange} 
                            type="text" 
                            name="namae" 
                            id="name-textbox"
                            className="form-control"
                            placeholder={currentLanguage.enterName}
                            value={this.state.namae} 
                            required/>

                        <MailRoundedIcon className="contact-form-icon" />    
                        <input 
                            onChange={this.handleInputChange} 
                            type="email" 
                            name="emailId" 
                            id="email-textbox" 
                            className="form-control"
                            placeholder={currentLanguage.enterEmail}
                            value={this.state.emailId}
                            required/>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="contact-form"> 
                        <DescriptionIcon className="contact-form-icon" /> 
                        <textarea 
                            onChange={this.handleInputChange} 
                            type="text" 
                            name="body" 
                            id="body-textbox"
                            className="form-control"
                            maxLength='255'
                            placeholder={currentLanguage.enterBody}
                            style={{width: '100%', height: '75px'}}
                            value={this.state.body} 
                            required/>
                      </div>
                    </div>

                    {commentEnter}

                </div>  {/* row ends */}

              </form>

            </div>
        )
    }
  }

export default CommentForm
  