import { useEffect, useState } from 'react'
import Image from 'next/image'

export const FallBackImage = ({ src, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      {...rest}
      src={imgSrc ? imgSrc : '/images/no-post-image.png'}
      onError={() => {
        setImgSrc('/images/no-post-image.png')
      }}
      alt="no-post-image"
    />
  )
}
