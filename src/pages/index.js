import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Marcelo Lopez">
      <p>This is Marcelo Lopez' Website</p>
      <br></br>


      <StaticImage
                        src="../images/Serious_Shot.jpg" alt="portrait"
                        layout="fixed"
                        width={500}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        style={{ marginBottom: `1.45rem` }}
                    />
      
    </Layout>
  )
}

export default IndexPage

