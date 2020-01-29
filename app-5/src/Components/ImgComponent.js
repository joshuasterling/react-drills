import React from 'react'

function ImgComponent(props) {
  return (
    <div>
    <img src={props.url} />
    <div><h1>Error 409</h1></div>
    </div>
  )
}

export default ImgComponent