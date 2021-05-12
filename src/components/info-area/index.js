import styles from "./info-area.module.scss"
import ReactTyped from "react-typed"

const InfoArea = () => {
  return (
    <section className={styles.infoAreaWrapper}>
      <span>Frontend developer</span>
      <h1 className={styles.trackingInExpand}>Gerald Martinez</h1>
      <p>
        <ReactTyped
          className="description"
          loop={false}
          typeSpeed={80}
          backSpeed={20}
          strings={[
            "I'm a frontend developer based in Nicaragua with 4+ years of experience. Currently working at <strong>Bejamas</strong> as a frontend developer,  building great stuff with #jamstack technologies.",
          ]}
          smartBackspace
          shuffle={false}
          backDelay={1}
          fadeOut
          fadeOutDelay={100}
          loopCount={0}
          showCursor
          cursorChar="|"
        />
      </p>

      <br />
    </section>
  )
}

export default InfoArea
