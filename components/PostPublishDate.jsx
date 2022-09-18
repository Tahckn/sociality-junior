import React from 'react'
import Moment from 'moment'

const PostPublishDate = ({ post }) => {
  const date = Moment(post.published_at).format('D MMMM YYYY - h:mm')
  return (
    <div>
      <h1 className="date">{date}</h1>
    </div>
  )
}

export default PostPublishDate
