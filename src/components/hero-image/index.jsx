import DevImage from "./image"

import styles from "./hero-image.module.scss"

const HeroImage = () => {
  return (
    <section className={styles.imageSide}>
      <div className={styles.heroImage}>
        <DevImage />
      </div>
    </section>
  )
}

export default HeroImage
