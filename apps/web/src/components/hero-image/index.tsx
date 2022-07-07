import { urlFor } from '@/utils/sanity'
import styles from './hero-image.module.scss'

interface Props {
  image: string
}

export function HeroImage({ image }: Props) {
  return (
    <section className={styles.imageSide}>
      <div className={styles.heroImage}>
        <img className="devImage" alt="Gerald Martinez" src={urlFor(image).url()} />
      </div>
    </section>
  )
}
