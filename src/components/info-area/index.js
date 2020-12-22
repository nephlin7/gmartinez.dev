import styles from "./info-area.module.scss"

const InfoArea = () => {
  return (
    <section className={styles.infoAreaWrapper}>
      <span>Front-end Developer</span>
      <h1 className={styles.trackingInExpand}>Gerald Martinez</h1>
      <p>
        Front-End web developer based in Nicaragua with 4+ years of experience.
        Currently, I'm working at <strong>Bejamas</strong> as a Front-end dev,
        building great stuff with
        <a
          rel="noreferrer noopener"
          href={`https://twitter.com/hashtag/JAMstack?src=hash&lang=es`}
          target={`_blank`}
        >
          #jamstack
        </a>
        technologies.
      </p>

      <br />
    </section>
  )
}

export default InfoArea
