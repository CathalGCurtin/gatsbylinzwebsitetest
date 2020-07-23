import React from 'react'

import {graphql, Link} from 'gatsby'

import Img from 'gatsby-image'

import Layout from '../components/layout'

const NewsItems = ({ data : { allContentfulLinzItem}}) => (
    <Layout>
        <div>
            {/* News items list */}
            {allContentfulLinzItem.edges.map(({node : newsItem})  => (
                    <div key = {newsItem.id}>
                        <h2>Latest News</h2>
                        <Link to ={`/newsitems/${newsItem.slug}`}>
                            <h3>{newsItem.headline}</h3>
                        </Link>
                        <Img 
                            style={{maxWidth: 400}}
                            fluid={newsItem.image.fluid}
                        />           
                    </div>
                )
            )}
        </div>
    </Layout>
)

export const query = graphql`
{
    allContentfulLinzItem {
        edges{
            node{
                id
                slug
                headline
                image {
                    fluid(maxWidth: 400){
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }

    }
}
`

export default NewsItems; 