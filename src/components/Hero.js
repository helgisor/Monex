import React, { useEffect } from "react"
import styled from "styled-components"
import heroVideo from "../assets/videos/city.mp4"
import Aos from "aos"
import "aos/dist/aos.css"
import anime from "animejs/lib/anime.es.js"

const Hero = () => {
  function scrollToTrips() {
    let scrollToElement = document.querySelector(".grid")
    scrollToElement.scrollIntoView()
  }

  useEffect(() => {
    Aos.init({})

    const first = document.querySelector(".first")
    const second = document.querySelector(".second")
    const third = document.querySelector(".third")
    const fourth = document.querySelector(".fourth")

    smallLetter()

    function smallLetter() {
      var textWrapper = document.querySelector(".ml7 .letters")

      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml7 .letter",
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: "easeOutExpo",
          delay: (el, i) => 50 * i,
        })
        .add({
          targets: ".ml7",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        })
    }
  }, [])

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          src={heroVideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>
            <h5 class="ml7">
              <span class="text-wrapper">
                <span class="letters">Another Way</span>
              </span>
            </h5>
          </HeroH1>
          <HeroP>Tailored finance for growth</HeroP>
          <div
            class="button"
            primary="true"
            big="true"
            round="true"
            to="/trips"
            onClick={scrollToTrips}
          >
            <span class="heroBtn">Our Services</span>
          </div>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  @media screen and (max-width: 768px) {
    height: 105vh;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`

const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`
