import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Useful_Links = () => {
  return (
      <Layout pageTitle="Useful Links">

      <p>These are some public projects that I have worked on, if you would like look at some projects done for school, please email me at Marcewo@umich.edu</p>


      <Link to="https://gitlab.eecs.umich.edu/marcewo">Gitlab</Link>
      <br></br>
      <br></br>
      <Link to="https://github.com/marcelo313">Github</Link>
      <br></br>
      <br></br>
      */will work on making png files clear/*
      <StaticImage
                        src="../images/Gitlab.png" alt="portrait"
                        layout="fixed"
                        width={500}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        style={{ marginBottom: `1.45rem` }}
                    />
      </Layout>
  )
}
export default Useful_Links

