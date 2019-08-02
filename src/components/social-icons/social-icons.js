import React from "react"
import gitHubIcon from "../../images/github.svg"
import twitterIcon from "../../images/twitter.svg"
import linkedinIcon from "../../images/linkedin.svg"
import dribble from "../../images/dribble.svg"

/** @jsx jsx */
import { jsx } from "@emotion/core"

const SocialIcons = () => {
  return (
    <>
      <a
        css={{
          marginRight: 5,
        }}
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://github.com/nephlin7`}
      >
        <img title="GitHub" alt={`nephlin7`} width="30" src={gitHubIcon} />
      </a>
      <a
        css={{
          marginRight: 5,
        }}
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://twitter.com/GeraldM_92`}
      >
        <img
          title="Follow me on twitter"
          alt={`@GeraldM_92`}
          width="30"
          src={twitterIcon}
        />
      </a>
      <a
        css={{
          marginRight: 5,
        }}
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://www.linkedin.com/in/gmartinez92/`}
      >
        <img
          title="Linkedin"
          alt={`gmartinez92`}
          width="30"
          src={linkedinIcon}
        />
      </a>
      <a
        rel={`noopener noreferrer`}
        target={`_blank`}
        href={`https://dribbble.com/geraldM`}
      >
        <img title="Dribble" alt={`gmartinez92`} width="30" src={dribble} />
      </a>
    </>
  )
}

export default SocialIcons
