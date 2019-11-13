import React, {Component} from 'react'

class LoginComponent extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    
    usernameChange(name){
        this.setState({username: name})
    }

    passwordChange(pass){
        this.setState({password: pass})
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return(
            <div>
                <input onChange={e => this.usernameChange(e.target.value)} type='text'></input>
                <input onChange={e => this.passwordChange(e.target.value)} type='text'></input>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default LoginComponent