import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Him">
                    <p>Hello, My name is Marcelo Lopez Jr. At the time this was created, I was a junior at the University Of Michigan, College of Literature
                    Science and Arts. Studying Computer Science planning on going into software engineering.
                    </p>

                    <p> He is also very cute and handsome and is arguarbly tall and romantic.</p>



                    <StaticImage
                        src="../images/Fire.jpg" alt="portrait"
                        layout="fixed"
                        width={500}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        style={{ marginBottom: `1.45rem` }}
                    />
        </Layout>
    )
}
export default AboutPage
