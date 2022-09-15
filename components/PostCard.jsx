import { BiBlock } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'
import { TbChecks } from 'react-icons/tb'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { ImFacebook } from 'react-icons/im'
import { BiLike } from 'react-icons/bi'
import { BiComment } from 'react-icons/bi'
import { BiShareAlt } from 'react-icons/bi'
import { BiShow } from 'react-icons/bi'
import Image from 'next/image'
import myData from '../data.json'

const postsByDate = JSON.stringify(myData)
const parsedData = JSON.parse(postsByDate)

const PostCard = () => {
  console.log(postsByDate)
  return (
    <div className="post-container">
      {Object.keys(myData.posts_by_date).map((key, i) => (
        <div key={i}>
          <h1>{key}</h1>
        </div>
      ))}
      <div className="post-card">
        <div className="post-card-social">
          <ImFacebook size="23" color="white" />
        </div>
        <div className="post">
          <div className="post-header">
            <p className="date"></p>
            <div className="actions">
              <TbChecks size="20" color="#acacac" />
              <BiBlock size="20" color="#acacac" />
              <BiTrash size="20" color="#acacac" />
              <HiOutlineDotsCircleHorizontal size="20" color="#acacac" />
            </div>
          </div>
          <p className="post-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            esse autem sunt tempore.
          </p>
          <div className="photo">
            <Image
              src="https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg"
              alt="tata"
              width={283}
              height={239}
            />
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default PostCard
