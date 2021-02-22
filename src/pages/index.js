import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Services from "../components/Services"
import "../components/styles/style.css"
import Team from "../components/Team"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Services />
    <Testimonials />
    <Team />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
