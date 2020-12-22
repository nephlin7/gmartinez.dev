import Image from "next/image"

const DevImage = () => {
  return (
    <Image
      className="devImage"
      alt="Gerald Martinez dev"
      width="518"
      height="600"
      src="/images/ger_dev_2020.jpg"
      priority
    />
  )
}

export default DevImage
