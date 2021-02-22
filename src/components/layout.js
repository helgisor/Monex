import React, { useState } from "react"

import { GlobalStyle } from "./styles/GlobalStyles"
import "../components/styles/scss.scss"
import Header from "./Header"
import Footer from "./Footer"
import Dropdown from "./Dropdown"
import ScrollButton from "./ScrollButton"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset)
    })
    return () => window.removeEventListener("scroll", () => {})
  })

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <main>{children}</main>
      <Footer />
      <ScrollButton height={height} />
    </>
  )
}

export default Layout
