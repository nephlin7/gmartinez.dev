import GitHubIcon from "../../icons/github.svg"
import TwitterIcon from "../../icons/twitter.svg"
import LinkedinIcon from "../../icons/linkedin.svg"
import Dribble from "../../icons/dribble.svg"

const SocialIcons = () => {
  return (
    <>
      <a
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://github.com/nephlin7`}
        title="Go to my Github"
      >
        <GitHubIcon />
      </a>
      <a
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://twitter.com/GeraldM_92`}
        title="Follow me on Twitter"
      >
        <TwitterIcon />
      </a>
      <a
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://www.linkedin.com/in/gmartinez92/`}
        title="Go to my Linkedin"
      >
        <LinkedinIcon />
      </a>
      <a
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://dribbble.com/geraldM`}
        title="Go to my portfolio"
      >
        <Dribble />
      </a>
    </>
  )
}

export default SocialIcons
