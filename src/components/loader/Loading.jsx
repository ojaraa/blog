import React from 'react'
import './Loading.css'
function Loader() {
  return (
    <>
      <div className="loading-con">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Loader