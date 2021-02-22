import React, { useEffect, Fragment } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"
import Aos from "aos"
import "aos/dist/aos.css"
import imageOne from "../assets/images/travel-1.jpg"
import { useStaticQuery, graphql } from "gatsby"
import anime from "animejs/lib/anime.es.js"

const Services = ({ heading }) => {
  useEffect(() => {
    Aos.init({})
  }, [])

  useEffect(() => {
    smallLetter()

    function smallLetter() {
      var textWrapper = document.querySelector(".ml12")
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml12 .letter",
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i,
        })
        .add({
          targets: ".ml12 .letter",
          translateX: [0, -30],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1100,
          delay: (el, i) => 100 + 30 * i,
        })

      var textWrapper = document.querySelector(".productsHeading2")
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml12 .letter",
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i,
        })
        .add({
          targets: ".ml12 .letter",
          translateX: [0, -30],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1100,
          delay: (el, i) => 100 + 30 * i,
        })
    }
  }, [])

  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            delay
            duration
            name2
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <figure
          className="effect-bubba"
          key={index}
          data-aos="fade-right"
          data-aos-delay={item.node.delay}
          data-aos-duration={item.node.duration}
        >
          <ProductImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <figcaption>
            <h3>
              {item.node.name2} <br></br>
              <span>{item.node.name}</span>
            </h3>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </figcaption>
        </figure>
      )
    })
    return tripsArray
  }

  return (
    <>
      <div className="grid">
        <h1 className="ml12 productsHeading">This is what we do</h1>

        <div className="productWrapper">{getTrips(data)}</div>

        <h1 className="ml12 productsHeading2">Bespoke solutions</h1>
      </div>
    </>
  )
}

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  will-change: transform;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductsHeading2 = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-top: 6.3rem;
  color: #000;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;

  background: #9e5406;
`

const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  opacity: 0.7;

  &:hover {
    filter: brightness(100%);

    opacity: 0.4;
  }
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`

export default Services
