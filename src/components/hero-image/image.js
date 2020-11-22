import Image from "next/image"

const DevImage = () => {
  return (
    <Image
      loading="eager"
      className="devImage"
      alt="Gerald Martinez dev"
      width="518"
      height="600"
      src="/images/ger_dev_2020.jpg"
    />
  )
}

export default DevImage
