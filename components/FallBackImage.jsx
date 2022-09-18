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
      src={imgSrc ? imgSrc : '/no-post-image.png'}
      onError={() => {
        setImgSrc('/no-post-image.png')
      }}
      alt="no-image"
    />
  )
}
