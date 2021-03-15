import React, { Component } from "react";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };

      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }

      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["firstname"] = "";
            fields["lastname"] = "";
            fields["email"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


        if (!fields["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "*Please enter your firstname.";
          }
    
          if (typeof fields["firstname"] !== "undefined") {
            if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["firstname"] = "*Please enter alphabet characters only.";
            }
          }
          if (!fields["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "*Please enter your lastname.";
          }
    
          if (typeof fields["lastname"] !== "undefined") {
            if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["lastname"] = "*Please enter alphabet characters only.";
            }
          }
  
       
  
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["email"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email-ID.";
          }
        }
  
      
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
  
  
    



    render() {
        return (
            <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange}/>
                    <div className="errorMsg">{this.state.errors.firstname}</div>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastname"value={this.state.fields.lastname} onChange={this.handleChange}/>
                    <div className="errorMsg">{this.state.errors.lastname}</div>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.fields.email} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.email}</div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.fields.password} onChange={this.handleChange}/>
                    <div className="errorMsg">{this.state.errors.password}</div>
                </div>

                  
                <input type="submit" className="button"  value="Sign Up"/>
            </form>
        );
    }
}
export default SignUp;