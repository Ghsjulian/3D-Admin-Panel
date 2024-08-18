import React from 'react'

const Users = () => {
  return (
    <section>
     <div className="users">
       <div className="user">
         <img src="/images/ghs_8.png" alt="user image" />
         <span>Ghs Julian</span>
         <div className="action">
         <button id="edit"><i className="bx bxs-pencil"></i></button>
         <button id="delete"><i className="bx bxs-trash"></i></button>
         </div>
       </div>
     </div>
    </section>
  )
}

export default Users