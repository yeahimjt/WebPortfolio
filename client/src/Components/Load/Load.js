import React from 'react'
import './Load.scss'
import {ThreeDots} from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="load-div">
        <h1>Loading page</h1>
        <ThreeDots
            height="80" 
            width="80" 
            radius="9"
            color="#4fa94d" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>
  )
}

export default Loading