import React from 'react'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

import Comment from './Comment'
import CommentForm from './CommentForm'

export default class CommentMan extends React.Component 
{
  
  constructor(props)
  {
    super(props)
    this.state = { comments: [], conEst: false }    
  }
  

  componentDidMount() 
  {
     this.getDataFromNode()

     this.intervalID = setInterval(this.getDataFromNode.bind(this), 20000);
  }

  getDataFromNode()
  {
    // axios.get(`http://localhost:4000/api/get`)
    axios.get(`/api/get`)
    .then(res => {
      const comments = res.data;
      this.setState({ comments: comments, conEst: true })
    })
    .catch(err=> {
      console.log(err)
      this.setState({conEst: false})
    })
  }

  componentWillUnmount()
  {
    clearInterval(this.intervalID)
  }

  render() 
  {
    var commentSection
    let currentLang = this.props.displayLanguage

    if(this.state.comments.length <= 0 && this.state.conEst === true)
    {
        commentSection = <div className="comment-loading"><CircularProgress /></div>
    }
    else if(this.state.comments.length <= 0 && this.state.conEst === false)
    {
        commentSection = <p className="comment-cantfetch">{currentLang.cantFetchComments}</p>
    }
    else if(this.state.conEst)
    {
        commentSection = <div> { this.state.comments.map(comment => <Comment key={comment.email} commento={comment} />)} </div>
    }


    return (
      <div className="container entire-commentsection">
          
          <div className="block-heading about-home-heading text-center">
            <h2>{currentLang.commentsHead}</h2>
            <p>{currentLang.saySomething}</p>
          </div>

          <CommentForm displayLanguage={currentLang} />

          <div className="comment-section">
              {commentSection}
          </div>
      </div>
    )
  }
}