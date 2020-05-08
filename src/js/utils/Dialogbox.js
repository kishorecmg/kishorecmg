import React from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


/* downloaded from https://material-ui.com/components/dialogs/ 
    added ref to access handleClickOpen from Display component. 
    this material-ui seem to create warnings that goes like ......

    index.js:1 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node
    in div (created by Transition)
    in Transition (created by ForwardRef(Fade))
    in ForwardRef(Fade) (created by ForwardRef(Backdrop))
    in ForwardRef(Backdrop) (created by WithStyles(ForwardRef(Backdrop)))
    in WithStyles(ForwardRef(Backdrop)) (created by ForwardRef(Modal))
    in div (created by ForwardRef(Modal))
    in ForwardRef(Portal) (created by ForwardRef(Modal))
    in ForwardRef(Modal) (created by ForwardRef(Dialog))
    in ForwardRef(Dialog) (created by WithStyles(ForwardRef(Dialog)))
    in WithStyles(ForwardRef(Dialog)) (at Dialogbox.js:60)
    in div (at Dialogbox.js:59)
    in Dialogbox (at Display.js:98)
    in div (at Display.js:104)
    in Router (created by BrowserRouter)
    in BrowserRouter (at Display.js:103)
    in Display (at App.js:10)
    in div (at App.js:9)
    in App (at src/index.js:12)
    in StrictMode (at src/index.js:11)
    
    UPDATE ASAP*/

class Dialogbox extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {open: false, loading: false}

    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleCloseFalse = this.handleCloseFalse.bind(this)
    this.handleCloseTrue = this.handleCloseTrue.bind(this)
    console.log("constructor")
  }

  componentDidMount()
  {
    console.log("componentdidmount")
    this.handleClickOpen()
  }

  componentWillUnmount()
  {
    console.log("componentwillunmount")
    this.setState({open:false})
  }

  handleClickOpen()
  {
      this.setState({open: true})
  }

  handleCloseFalse = () =>
  {
      this.setState({open: false})
      this.props.data.agreedOrNot(false)
  }

  handleCloseTrue = () =>
  {
    this.setState({open: false})
    this.props.data.agreedOrNot(true)
  }

  render()
  {
    let currentLang = this.props.data.language.dialogbox

    return (
      <div>
        <Dialog open={this.state.open} onClose={this.handleClose}
          aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
          
          <DialogTitle id="alert-dialog-title">{currentLang.areYouSure}</DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description"> {currentLang.description} </DialogContentText>
          </DialogContent>
          
          <DialogActions>
            <Button onClick={this.handleCloseFalse} color="primary"> {currentLang.disagree} </Button>
            <Button onClick={this.handleCloseTrue} color="primary" autoFocus> {currentLang.agree} </Button>
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}

export default Dialogbox