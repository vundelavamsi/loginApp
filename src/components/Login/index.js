// Write your code here
const Login = props => {
  const {loginClick} = props
  console.log(loginClick)
  return (
    <button type="button" onClick={loginClick}>
      Login
    </button>
  )
}

export default Login
