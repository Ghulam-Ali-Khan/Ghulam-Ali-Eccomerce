import React from 'react'

const SliderCrousalItem = (props) => {
  return (
    <>
      <img src={props.url} alt={props.text} className='crousal-item' style={{maxWidth:'100%'}} />
    </>
  )
}

export default SliderCrousalItem
