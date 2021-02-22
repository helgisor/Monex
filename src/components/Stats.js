import React, { useEffect } from "react"
import styled from "styled-components"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"
import Aos from "aos"
import "aos/dist/aos.css"
import Flip from "./Flip"
import imageOne from "../assets/images/benefit1.jpg"
import imageTwo from "../assets/images/benefit2.jpg"
import imageThree from "../assets/images/benefit3.jpg"
import imageFour from "../assets/images/benefit4.jpg"

const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over 100 Destinations",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "1 Million Trips Made",
    desc: "Over 1 million trips completed last year",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Fast and Efficient Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Affordable and Regular Deals",
    desc: "We offer the best prices",
  },
]

const Stats = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <main className="wrapper">
      <Heading
        data-aos="fade-right"
        data-aos-delay="250"
        data-aos-duration="1300"
      >
        Why Choose Us?
      </Heading>

      <section className="breweries" id="breweries">
        <ul>
          <li data-aos="fade-out" data-aos-delay="250" data-aos-duration="1300">
            <figure>
              <img src={imageOne} />
              <figcaption>
                <h3>Loyal Customers</h3>
              </figcaption>
            </figure>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
              natus! Id quod repudiandae quae a quibusdam ipsa omnis nesciunt
              consequntur!
            </p>
          </li>
          <li data-aos="fade-out" data-aos-delay="200" data-aos-duration="1300">
            <figure>
              <img src={imageFour} />
              <figcaption>
                <h3>Superb Reviews</h3>
              </figcaption>
            </figure>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              officia itaque rem doloribus deleniti, fugiat, ad est voluptatem
              modi fugit repellat nesciunt veritatis.
            </p>
          </li>
          <li data-aos="fade-out" data-aos-delay="200" data-aos-duration="1300">
            <figure>
              <img src={imageTwo} />
              <figcaption>
                <h3>Decades of Experience</h3>
              </figcaption>
            </figure>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis nemo eius minus esse expedita veniam ad omnis eligendi
              deleniti? Dicta, saepe!
            </p>
          </li>

          <li data-aos="fade-out" data-aos-delay="200" data-aos-duration="1300">
            <figure>
              <img src={imageThree} />
              <figcaption>
                <h3>Influencial Contacts</h3>
              </figcaption>
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              fuga, perspiciatis velit provident quos cupiditate, illum in
              distinctio nemo obcaecati qui. Aspernatur, iste!
            </p>
          </li>
        </ul>

        <HeadingFlip
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="headingFlip"
        >
          <Flip></Flip>
        </HeadingFlip>
      </section>
    </main>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`
const Heading = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`
const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`
const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
