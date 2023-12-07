import React from 'react'

const Book = ({data}) => {
  return (
    <div className='bookcontainer'>
       <div> Title<p>{data.title}</p></div>
       <div> Author<p>{data.author}</p></div>
       <div> category<p>{data.genre}</p></div>
       <div> description<p>{data.description}</p></div>
    </div>
  )
}

export default Book