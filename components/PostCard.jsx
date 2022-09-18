import { BiBlock } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'
import { TbChecks } from 'react-icons/tb'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im'
import { BiLike, BiComment, BiShareAlt, BiShow } from 'react-icons/bi'
import Link from 'next/link'
import { FallBackImage } from './FallBackImage'

const PostCard = ({ post }) => {
  return (
    <div className="post-container">
      {Object.keys(post).map((key, index) => (
        <div key={index}>
          <h1>{key}</h1>
          <div className="daily-post">
            {Object.values(
              post[key].map((post, index) => (
                <div key={index}>
                  <div className="post-card">
                    <div className="post-card-social">
                      {post.account.channel === 'facebook' ? (
                        <ImFacebook size="23" color="white" />
                      ) : (
                        ''
                      )}
                      {post.account.channel === 'twitter' ? (
                        <ImTwitter size="23" color="white" />
                      ) : (
                        ''
                      )}
                      {post.account.channel === 'instagrambusiness' ? (
                        <ImInstagram size="23" color="white" />
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="post">
                      <div className="post-header">
                        <p className="date">{post.published_at}</p>
                        <div className="actions">
                          {post.status === 0 ? (
                            <TbChecks size="20" color="#acacac" />
                          ) : (
                            ''
                          )}
                          {post.status === 1 ? (
                            <BiBlock size="20" color="#acacac" />
                          ) : (
                            ''
                          )}

                          <BiTrash size="20" color="#acacac" />
                          <HiOutlineDotsCircleHorizontal
                            size="20"
                            color="#acacac"
                          />
                        </div>
                      </div>
                      <p className="post-text">{post.entry.message}</p>
                      <div className="photo">
                        <Link href={`${post.account.link}`}>
                          <a>
                            <FallBackImage
                              src={`${post.entry.image[0]}`}
                              alt="tata"
                              width={283}
                              height={239}
                            />
                          </a>
                        </Link>
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
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostCard
