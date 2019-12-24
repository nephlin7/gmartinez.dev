import React from "react"
import styled from "@emotion/styled"

const WorkItem = ({ item }) => {
  const { imageUrl, title, shortDescription, url, tags } = item

  return (
    <WorkItemBox>
      <WorkItemImage>
        <img src={imageUrl} alt={title} />
      </WorkItemImage>
      <WorkItemBoxContent>
        <WorkItemTitle>{title}</WorkItemTitle>
        <WorkItemDesc>{shortDescription}</WorkItemDesc>
        {tags.map(tag => {
          return <Tag>{tag}</Tag>
        })}
      </WorkItemBoxContent>
    </WorkItemBox>
  )
}

let WorkItemImage = styled.figure`
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  overflow: hidden;

  & img {
    width: 100%;
  }
`

let WorkItemBox = styled.article`
  box-shadow: 0 16px 48px rgba(45, 45, 45, 0.31);

  margin: 0 15px;
  max-width: 380px;
  margin-bottom: 30px;
  border-radius: 3px;
`

let WorkItemTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
`

let WorkItemDesc = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
`
let WorkItemBoxContent = styled.section`
  padding: 20px;
`

let Tag = styled.span`
  background: #959595;
  border-radius: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 0.8rem;
  padding: 3px 7px;
  display: inline-block;
`
export default WorkItem
