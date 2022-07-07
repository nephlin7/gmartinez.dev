import styles from './info-area.module.scss'

const blogEntries = [
  {
    title: 'Gatsby vs. WordPress: Marketers Overview',
    link: 'https://bejamas.io/blog/gatsby-vs-wordpress/',
    icon: '📓',
  },
  {
    title: 'TakeShape review ',
    link: 'https://bejamas.io/discovery/headless-cms/takeshape/',
    icon: '✍🏼',
  },
  {
    title: 'Strapi review',
    link: 'https://bejamas.io/discovery/headless-cms/strapi/',
    icon: '✍🏼',
  },
]

export function InfoArea() {
  return (
    <section className={styles.infoAreaWrapper}>
      <span>Frontend developer</span>
      <h1 className={styles.trackingInExpand}>Gerald Martinez</h1>
      <p className={styles.text}>
        I'm a frontend developer based in Nicaragua with 5+ years of experience. Currently working
        at <strong>Bejamas</strong> as a frontend developer, building great stuff with React, Next,
        TypeScript, HeadlessCMS and more cool technologies.
      </p>

      <p className={styles.text}>
        Since joining Bejamas I have had the opportunity to contribute to a few blog posts, take a
        look at some of them:
      </p>
      <br />
      <ul className={styles.blogEntries}>
        {blogEntries.map((item) => (
          <li key={item.link}>
            <a href={item.link} rel="noreferrer noopener" target="_blank">
              {item.icon} {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
