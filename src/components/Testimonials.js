import React, { useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

const Testimonials = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  useEffect(() => {
    let typed = ""
    const element = document.querySelector(".typity")

    function startType(pun, index) {
      if (index < pun.length) {
        typed += pun.charAt(index)
        element.innerHTML = typed
        index++
        setTimeout(function () {
          startType(pun, index)
        }, 43)
      } else {
        setTimeout(function () {
          element.classList.add("highlight")
        }, 4000)

        setTimeout(function () {
          element.classList.remove("highlight")
          typed = ""
          element.innerHTML = typed
          startType(getRandomPun(), 0)
        }, 5500)
      }
    }

    function getRandomPun() {
      const puns = [
        "We were incredibly pleased with the provided servives. When my colleague and friend recommended Monex, I wasn't so sure, but now I can say that signing up was one of the best decisions I made.",
        "The dedication, professionalism and the insight in to the financial world is unparallaed. I was truly surprised at how many ways Monex was able to help me. Absolutely recommended!",
        "When we first approached the company, we were stunned at the level of dedication. Our worries and complaints were addressed at once and we felt secure knowing that Monex is taking care of us.",
        "Since signing up with Monex, we have seen an incredible increase in our profits. I am certainly glad that we did not sign up with one of the bigger companies, as Monex has delivered more than we could have imagined.",
      ]
      const index = Math.floor(Math.random() * puns.length)

      return puns[index]
    }

    startType(getRandomPun(), 0)
  }, [])

  useEffect(() => {
    let typed = ""
    const element = document.querySelector(".typity2")

    function startType(pun, index) {
      if (index < pun.length) {
        typed += pun.charAt(index)
        element.innerHTML = typed
        index++
        setTimeout(function () {
          startType(pun, index)
        }, 43)
      } else {
        setTimeout(function () {
          element.classList.add("highlight")
        }, 4000)

        setTimeout(function () {
          element.classList.remove("highlight")
          typed = ""
          element.innerHTML = typed
          startType(getRandomPun(), 0)
        }, 5500)
      }
    }

    function getRandomPun() {
      const puns = [
        "There are some companies that provide great service, and there are some that are exceptionial. Monex is one such example. I have recommended Monex to all my friends.",
        "When I reported a troubling problem, Monex responded immediately. Not only that, but they fixed the issue within 20 minutes. Monex definitely takes care of their customers.",
        "What would I do without Monex? I am honestly not sure. Perhaps we could have signed up with another company, but the reviews for Monex speak for themselves",
        "The key to success of Monex is that all of their employees are treated as valuable partners. Everyone has a role to play and you can see the enthusiasm on their smiles and in their eyes.",
      ]
      const index = Math.floor(Math.random() * puns.length)

      return puns[index]
    }

    startType(getRandomPun(), 0)
  }, [])

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <TestimonialsContainer className="TestimonialContainer">
      <div className="topDescContainer">
        <TopLine
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        ></TopLine>
        <Description
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Some of Our Recent Feedback
        </Description>
      </div>

      <ContentWrapper>
        <ColumnOne>
          <Testimonial
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1200"
          >
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>John Williams</h3>

            <div className="typityContainer">
              <span className="typity"></span>
            </div>

            <div className="output" id="output">
              <h1 className="cursor"></h1>
              <p></p>
            </div>
          </Testimonial>
          <Testimonial
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <FaRegLightbulb
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Susan Porter</h3>

            <span className="typity2"></span>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
