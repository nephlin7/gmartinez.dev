import Image from 'next/image'
import devImage from '../../../public/images/ger_dev_2020.jpg'

export function DevImage() {
  return (
    <Image
      className="devImage"
      alt="Gerald Martinez"
      src={devImage}
      placeholder="blur"
      layout="responsive"
    />
  )
}
