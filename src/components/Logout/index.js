// Write your code here
const Logout = props => {
  const {logoutClick} = props
  return (
    <button type="button" onClick={logoutClick}>
      Logout
    </button>
  )
}

export default Logout
