// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onStatus = () => {
    this.setState(prevState => {
      if (prevState.isLoggedIn === false) {
        return {isLoggedIn: true}
      }
      return {isLoggedIn: false}
    })
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="login-app-bg-container">
        <div className="login-card-container">
          {isLoggedIn ? (
            <Message message="Welcome User" />
          ) : (
            <Message message="Please Login" />
          )}
          {isLoggedIn ? (
            <Logout logoutClick={this.onStatus} />
          ) : (
            <Login loginClick={this.onStatus} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
