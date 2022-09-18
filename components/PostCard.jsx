import {
  PostCardSocial,
  Actions,
  Reactions,
  PostHeaderDaily,
  PostPublishDate,
} from './index'
import Link from 'next/link'
import { FallBackImage } from './FallBackImage'

const PostCard = ({ post }) => {
  return (
    <div className="post-container">
      {Object.keys(post).map((key, index) => (
        <div key={index}>
          <PostHeaderDaily header={key} />
          <div className="daily-post">
            {Object.values(
              post[key].map((post, index) => (
                <div key={index}>
                  <div className="post-card">
                    <PostCardSocial post={post} status={post.status} />
                    <div className="post">
                      <div className="post-header">
                        <PostPublishDate post={post} />
                        <Actions post={post} />
                      </div>
                      <p className="post-text">{post.entry.message}</p>
                      <div className="photo">
                        <Link href={`${post.account.link}`}>
                          <a>
                            <FallBackImage
                              className="image"
                              src={`${post.entry.image[0]}`}
                              alt="post image"
                              width={283}
                              height={239}
                            />
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Reactions post={post} />
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
