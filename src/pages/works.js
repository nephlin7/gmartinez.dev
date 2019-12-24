import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkItem from "../components/WorkItem"

const WorksList = [
  {
    imageUrl:
      "https://cdn.dribbble.com/users/3919931/screenshots/6899663/mockups-bestguides_2x.jpg",
    title: "Tour Operator Web Redesign",
    shortDescription:
      "Website Redesign for a Full-Service Tour Operator  from Nicaragua.",
    url: "https://www.nicaraguasbestguides.com",
    tags: ["gatsby", "styled-components", "react", "contentful"],
  },
  {
    imageUrl:
      "https://cdn.dribbble.com/users/3919931/screenshots/6906776/store-website_4x.jpg",
    title: "Convenience Store",
    shortDescription: "Landing Page for a Convenience Store from Nicaragua.",
    url: "",
    tags: ["gatsby", "styled-components", "react", "contentful"],
  },
  {
    imageUrl:
      "https://cdn.dribbble.com/users/3919931/screenshots/6901338/mockups-landing_2x.jpg",
    title: "Marketing Agency Landing Page",
    shortDescription: "Landing page template for marketing agency.",
    url: "",
    tags: ["Adobe XD", "Next js"],
  },
]

const Works = () => {
  return (
    <Layout pageTitle="Works">
      <SEO
        title="Work"
        description="Gerald Martinez - Front end developer based in Nicaragua"
      />
      <WorkItemWrapper>
        {WorksList.map((item, i) => {
          return <WorkItem key={item.title} item={item} />
        })}
      </WorkItemWrapper>
    </Layout>
  )
}

export default Works

let WorkItemWrapper = styled.article`
  padding: 20px;
  color: #333;
  margin-left: 20%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
