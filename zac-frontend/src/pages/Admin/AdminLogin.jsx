import React from 'react'

const AdminLogin = () => {
  return (
    <>
        <form>
            <div className="form-group">
                <label htmlFor="postTitle">Username:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder='Username'                    
                    name="username"
                    value=""
                />
            </div>
            <div className="form-group">
                <label htmlFor="postTitle">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder='Password'                    
                    name="password"
                    value=""
                />
            </div>
            <button className="btn btn-primary">
                Submit
            </button>
        </form>
    </>
  )
}

export default AdminLogin