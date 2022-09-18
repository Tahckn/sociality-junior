import React from 'react'
import { BiLike, BiComment, BiShareAlt, BiShow } from 'react-icons/bi'

const Actions = ({ post }) => {
  return (
    <div className="reactions">
      <BiLike size="20" color="#444444" />
      <p>0</p>
      <BiComment size="20" color="#444444" />
      <p>0</p>
      <BiShareAlt size="20" color="#444444" />
      <p>0</p>
      <BiShow size="21" color="#444444" />
      <p>0</p>
    </div>
  )
}

export default Actions
