import React from "react"
import Layout from "../components/layout"
import DevImage from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO
            title="Home"
            description="Gerald Martinez - Front end developer based in Nicaragua"/>

        <div
            style={{
            maxWidth: `100%`,
            maxHeight: `100vh`,
            overflow: `hidden`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`
        }}>

            <div
                style={{
                position: `relative`,
                width: `40%`,
                height: `100vh`,
                textAlign: `center`,
                lineHeight: `3.5rem`,
                fontSize: `2rem`,
                background: `linear-gradient(to top, #09203f 0%, #537895 100%)`,
                color: `white`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                flexDirection: `column`
            }}>

                <div className="hero-image">
                    <DevImage/>
                </div>

            </div>

            <div className="info-area">
                <span style={{
                    color: `#6f6f6f`
                }}>Front End Dev</span>
                <h1 className="main-title tracking-in-expand ">Gerald Martinez</h1>
                <p
                    style={{
                    lineHeight: `27px`,
                    marginBottom: `15px`
                }}>
                    <span role="img" aria-label="code">👨‍💻</span>
                    Hi, Im a Front-End dev based in Nicaragua.
                    <br/>
                    I love working with

                    <a
                        rel="noreferrer noopener"
                        href={`https://twitter.com/hashtag/JAMstack?src=hash&lang=es`}
                        target={`_blank`}
                        style={{
                        marginLeft: 10,
                        marginRight: 10
                    }}>
                        #JAMSTACK
                    </a>
                    <span aria-label="laptop" role="img">
                        💻</span>
                </p>

                <br/>
                <a className="button -dark center" href="/docs/gmartinezcv2019.pdf">Download Resume</a>
            </div>
        </div>
    </Layout>
)

export default IndexPage
