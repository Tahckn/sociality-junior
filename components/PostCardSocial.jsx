import cn from 'classnames'
import styles from '../styles/social.module.css'
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im'

export default function Social({ post, status }) {
  return (
    <div
      className={cn({
        [styles.needapproval]: status === 0,
        [styles.scheduled]: status === 1,
        [styles.error]: status === 4,
        [styles.published]: status === 3,
      })}
    >
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
  )
}
