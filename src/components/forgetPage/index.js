import {Component} from "react"

import "./forgot.css"
import Header from "../header"

class ForgetMailPage extends Component{
   state = {Email:"",IsReset:false,mailEmpty:false}

   changeEmail = (event) => {
      this.setState({Email:event.target.value})
   }


   gotoResetPassword = (event) => {
      event.preventDefault()
      const {Email} = this.state
      if (Email !== ""){
         this.setState({IsReset:true,mailEmpty:false})
      }else{
         this.setState({mailEmpty:true,IsReset:false})
      }
   }

   gotoConfirmPassword = (event) => {
      event.preventDefault()
      const {Email} = this.state
      if (Email !== ""){
         this.setState({IsReset:true})
      }
   }

   resetPassword = () => {
      const v = 0
      return(
         <>
            <button type="submit" class="btn btn-primary w-100 d-none" data-bs-toggle="modal" data-bs-target="#openResetForm">
                  Reset Password
            </button>
               <div className="modal fade" id="openResetForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h1 className="reset-heading" id="exampleModalLabel">Reset Password</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <form className="reset-container" onSubmit={this.gotoResetPassword}>
                        <p className="p-0 mb-3 reset-password-para">Enter your new password below. we’re just being extra safe</p>
                        <div className="inpt-container">
                           <label htmlFor="email" className="mb-2"><b>New Password</b></label>
                           <input type="password" placeholder="New Password" className="form-control mb-4" onChange={this.changeEmail}/>
                        </div>
                        <div className="inpt-container">
                           <label htmlFor="email" className="mb-2"><b>Confirm Password</b></label>
                           <input type="password" placeholder="New Password" className="form-control mb-4" onChange={this.changeEmail}/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100" >Reset</button>
                     </form>
                  </div>
               </div>
            </div>
         </>
         
      )
   }

   render(){

      const {Email,IsReset,mailEmpty} = this.state
      const ButtonContent = !IsReset ? "Reset Password" : "Please Check your mail inbox"

      return(
         <>
            <Header />
            <div className="main-container"> 
               <form className="form-data shadow" onSubmit={this.gotoResetPassword}>
                  <h3 className="main-heading mb-5">Forgot password</h3>
                  <p className="p-0 mb-3 password-para">Enter your resgistered mail here</p>
                  <div className="inpt-container">
                     <label htmlFor="email" className="mb-2 forgot"><b>Email</b></label>
                     <input value={Email} type="email" className="form-control input-field mb-4" onChange={this.changeEmail} disabled={IsReset}/>
                  </div>
                  <div className="mail-and-confirmation-alert">
                     {mailEmpty && <p className="plese-enter-valid-mail mb-2">Please Give working mail id</p>}
                     {IsReset ? 
                        <p className="w-100 mb-2 please-check-mail alert alert-primary" role="alert" >{ButtonContent}</p>
                        : 
                        <button type="submit" className="btn btn-primary w-100 mb-2" >{ButtonContent}</button>
                     }
                  </div>
               </form>
            </div>
         </>
         
      )
   }
}

export default ForgetMailPage