import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import imageOne from "../assets/images/person1.jpg"
import imageTwo from "../assets/images/person2.jpg"
import imageThree from "../assets/images/person3.jpg"

const Team = () => {
  useEffect(() => {
    Aos.init({})
  }, [])


  return (
    <section id="team" className="team section-padding">
    <header className="section-header">
      <h2 data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000">Our Professional Team</h2>
      <p data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000">
        Our skilled and knowledgeable team is made up of professionals with years of experience
      </p>
    </header>
    <div className="flex-items">
      <div  data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000">
        <img src={imageOne} alt="" />
        <h4 className="names">Michael Hart</h4>
        <p>CEO</p>
      </div>
      <div  data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000">
        <img src={imageTwo} alt="" />
        <h4 className="names">Mary Madden</h4>
        <p>CFO</p>
      </div>
      <div  data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000">
        <img src={imageThree} alt="" />
        <h4 className="names">Robert Hendrix</h4>
        <p>CTO</p>
      </div>
    </div>
  </section>
  )
}

export default Team

