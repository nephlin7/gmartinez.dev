import { PortableText } from '@/utils/sanity'
import styles from './info-area.module.scss'

interface Posts {
  title: string
  url: string
  emoji: string
}

interface Props {
  heading: string
  subHeading: string
  excerpt: []
  posts?: Posts[]
}

export function InfoArea({ heading, subHeading, excerpt, posts = [] }: Props) {
  return (
    <section className={styles.infoAreaWrapper}>
      <span>{subHeading}</span>
      <h1 className={styles.trackingInExpand}>{heading}</h1>
      {excerpt && <div className={styles.portableText}>{<PortableText value={excerpt} />}</div>}

      <br />
      <ul className={styles.blogEntries}>
        {posts.map((item) => (
          <li key={item.url}>
            <a href={item.url} rel="noreferrer noopener" target="_blank">
              {item.emoji} {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
