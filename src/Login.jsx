import React from 'react';

        class Login extends React.Component {
                constructor(props) {
                  super(props);
                  this.state = {email: '',
                                pass: ''};
                  this.handleChange = this.handleChange.bind(this);
                  this.handleSubmit = this.handleSubmit.bind(this);
                  this.handlePass = this.handlePass.bind(this);
                }
              
                handleChange(event) {    this.setState({email: event.target.value});  }
                handlePass(event) { this.setState({pass: event.target.value })}
                handleSubmit(event) {
                  alert('A name was submitted: ' + this.state.value);
                  event.preventDefault();
                }
              
                render() {
                  return (
                    <form onSubmit={this.handleSubmit} className="mt-2 container" id="h1"> 
                        <div className="form-group">
                                <label> Email: </label>
                                <input type="text" className="form-control" value={this.state.email} onChange={this.handleChange} /> 
                        </div>
                        <div className="form-group">
                        <label> Password: </label>
                        <input type="password" className="form-control" value={this.state.pass} onChange={this.handlePass} />
                        </div>
                      <input type="submit" value="Submit" />
                    </form>
                  );
                }
              }

export default Login;