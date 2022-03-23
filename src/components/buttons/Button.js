import React from 'react'

function Button({title, dataType}) {
  return (
    <>
      <button className='btn' data-type={dataType}>
        <span>{title}</span>
      </button>
    </>
  )
}

export default Button