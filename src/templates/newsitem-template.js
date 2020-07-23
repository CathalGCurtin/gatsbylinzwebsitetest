import React from 'react'

import {graphql} from 'gatsby'

import Img from 'gatsby-image'

import Layout from '../components/layout'

const LinzNewsItemTemplate = ({data : {contentfulLinzItem}}) => (
    <Layout>
        <div style ={{
            marginLeft: '0 auto',
            width: '100%',
            textAlign: 'center'
        }}>
            {/* News item */}
            <h2>{contentfulLinzItem.headline} - <span style={{color: '#ccc'}}>
                </span>Added on {contentfulLinzItem.createdAt}</h2>
                <p>{contentfulLinzItem.description}</p>
                <Img style={{margin: '0 auto', maxWidth: 600}} 
                     fluid={contentfulLinzItem.image.fluid}/>
        </div>
    </Layout>
)

export const query = graphql`
query($slug: String!){
    contentfulLinzItem (slug: {eq: $slug}) {
      headline
      description
      createdAt (formatString: "do MMMM, YYYY, h:mm")
      image{
          fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
          }
      }
    }
  } 
`

export default LinzNewsItemTemplate