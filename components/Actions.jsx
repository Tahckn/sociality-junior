import React from 'react'
import { BiBlock } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'
import { TbChecks } from 'react-icons/tb'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'

const Actions = ({ post }) => {
  return (
    <div className="actions">
      {post.status === 0 ? <TbChecks size="20" color="#acacac" /> : ''}
      {post.status === 1 ? <BiBlock size="20" color="#acacac" /> : ''}

      <BiTrash size="20" color="#acacac" />
      <HiOutlineDotsCircleHorizontal size="20" color="#acacac" />
    </div>
  )
}

export default Actions
