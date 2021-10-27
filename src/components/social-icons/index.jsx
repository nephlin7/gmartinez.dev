import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandDribbble,
} from "@tabler/icons"

import styles from "./social-icons.module.scss"

const SocialIcons = () => {
  return (
    <ul className={styles.socialIcons}>
      <li>
        <a
          rel={`noopener noreferrer`}
          target={`_blank`}
          href={`https://github.com/nephlin7`}
          title="Go to my Github"
        >
          <IconBrandGithub />
        </a>
      </li>
      <li>
        <a
          rel={`noopener noreferrer`}
          target={`_blank`}
          href={`https://www.linkedin.com/in/gmartinez92/`}
          title="Go to my Linkedin"
        >
          <IconBrandLinkedin />
        </a>
      </li>
      <li>
        <a
          rel={`noopener noreferrer`}
          target={`_blank`}
          href={`https://dribbble.com/geraldM`}
          title="Go to my portfolio"
        >
          <IconBrandDribbble />
        </a>
      </li>
      <li>
        {" "}
        <a
          rel={`noopener noreferrer`}
          target={`_blank`}
          href={`https://twitter.com/GeraldM_92`}
          title="Follow me on Twitter"
        >
          <IconBrandTwitter />
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons
