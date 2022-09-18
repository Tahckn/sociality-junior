import React from 'react'
import Moment from 'moment'

const PostHeaderDaily = ({ header }) => {
  const date = Moment(header).format('D MMMM YYYY')
  return (
    <div>
      <h1>{date}</h1>
    </div>
  )
}

export default PostHeaderDaily
