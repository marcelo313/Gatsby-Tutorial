import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Useful_Links = () => {
  return (
      <Layout pageTitle="Useful Links">

      <p>These are some public projects that I have worked on, if you would like look at some projects done for school, please email me at Marcewo@umich.edu</p>


      <Link to="https://gitlab.eecs.umich.edu/marcewo">Gitlab</Link>
      <br></br>
      <br></br>
      <Link to="https://github.com/marcelo313">Github</Link>

      

      </Layout>
  )
}
export default Useful_Links

