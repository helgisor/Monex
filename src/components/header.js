import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

const Header = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    if (window.location.pathname) {
      setNavbar(window.location.pathname)
    }
  }, [])

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction()
    }

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.querySelector(".navBar").classList.add("pop_out")
        document.querySelector(".navBar").classList.remove("pop_in")

        document.querySelector(".logo").classList.remove("navColorUp")
        document.querySelector(".logo").classList.add("navColorDown")
      } else if (window.top) {
        document.querySelector(".navBar").classList.remove("pop_out")
        document.querySelector(".navBar").classList.add("pop_in")

        document.querySelector(".logo").classList.add("navColorUp")
        document.querySelector(".logo").classList.remove("navColorDown")
      }
    }
  }, [])

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  const scrollToHeadingFlip = () => {
    let scrollToElement = document.querySelector(".headingFlip")
    scrollToElement.scrollIntoView()
  }

  const scrollToTrips = () => {
    let scrollToElement = document.querySelector(".grid")
    scrollToElement.scrollIntoView()
  }

  const scrollToTestimonials = () => {
    let scrollToElement = document.querySelector(".TestimonialContainer")
    scrollToElement.scrollIntoView()
  }

  const scrollToCareers = () => {
    let scrollToElement = document.querySelector(".wrapper")
    scrollToElement.scrollIntoView()
  }

  const scrollToTeam = () => {
    let scrollToElement = document.querySelector(".team")
    scrollToElement.scrollIntoView()
  }

  return (
    <nav className="navBar">
      <NavLink className="logo" onClick={scrollBackToTop}>
        MONEX
      </NavLink>
      <Bars onClick={toggle} />
      <NavMenu id="menu-center">
        <div class="navLink" onClick={scrollToTrips}>
          Services
        </div>
        <div class="navLink" onClick={scrollToTestimonials}>
          About
        </div>
        <div class="navLink" onClick={scrollToTeam}>
          Team
        </div>
        <div class="navLink" onClick={scrollToCareers}>
          Benefits
        </div>
      </NavMenu>

      <NavBtn>
        <div
          class="btn-flip"
          onClick={scrollToHeadingFlip}
          data-back="Welcome"
          data-front="Sign Up"
        ></div>
      </NavBtn>
    </nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ navbar }) => (navbar !== "/" ? "#141414" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  top: 0;
  z-index: 10;
  position: sticky;
`

const NavLink = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -0.6rem;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursoer: pointer;
  }
  @media screen and (max-width: 600px) {
    top: -0.1rem;
    right: 0;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
