import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"

const Dropdown = ({ isOpen, toggle }) => {
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

  const scrollToHeadingFlip = () => {
    let scrollToElement = document.querySelector(".headingFlip")
    scrollToElement.scrollIntoView()
  }

  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <div onClick={scrollToTrips} className="dropDownLink">
            Services
          </div>
          <div onClick={scrollToTestimonials} className="dropDownLink">
            About
          </div>
          <div onClick={scrollToTeam} className="dropDownLink">
            Team
          </div>
          <div onClick={scrollToCareers} className="dropDownLink">
            Benefits
          </div>
        </DropdownMenu>
        <BtnWrap>
          <div
            primary="true"
            round="true"
            className="signUp"
            onClick={scrollToHeadingFlip}
          >
            Sign Up
          </div>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown

const DropdownContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`

const DropdownWrapper = styled.div`
  color: #fff;
`
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #f26a2e;
  }
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
