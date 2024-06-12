import React from 'react'
import user from '../../controller/User'

const Account = () => {
    console.log(user.getUserName());
  return (
    <>
        <div>{user.getUserName}</div>
    </>
  )
}

export default Account