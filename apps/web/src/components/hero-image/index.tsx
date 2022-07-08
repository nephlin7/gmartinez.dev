import styles from './hero-image.module.scss';

import { urlFor } from '@/utils/sanity';

interface Props {
  image: string;
}

export function HeroImage({ image }: Props) {
  return (
    <section className={styles.imageSide}>
      <div className={styles.heroImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="devImage" alt="Gerald Martinez" src={urlFor(image).url()} />
      </div>
    </section>
  );
}
