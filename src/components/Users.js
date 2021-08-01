import User from "./User"

const Users = ({ names, status }) => {
  return (
    <>
      {
        status === 200 ? 
        <div>
          <h1 className="main-heading">Rick and Morty characters</h1>

          <div className="main-div">
            {
              names.map((name) => {
                return (              
                  <div key={ name.name } className="card">
                    <User name={ name } />
                  </div>
                )
              })
            }
          </div>
        </div>
        :
        <h1 className="main-heading">No available characters</h1>
      }
    </>
  )
}

export default Users
