import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import imageOne from "../assets/images/person1.jpg"
import imageTwo from "../assets/images/person2.jpg"
import imageThree from "../assets/images/person3.jpg"

const Benefits = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <main className="wrapper">
      <section className="breweries" id="breweries">
        <ul>
          <li>
            <figure>
              <img src={imageOne} />
              <figcaption>
                <h3>Loyal Customers</h3>
              </figcaption>
            </figure>
            <p>
              We're always on top of the latest releases. We hunt down the
              internet so you don't have to. Whether it's cool, quirky or
              sustainable that you're looking for, we probably have it.
            </p>
          </li>
          <li>
            <figure>
              <img src={imageTwo} />
              <figcaption>
                <h3>Customisation</h3>
              </figcaption>
            </figure>
            <p>
              Found something but it could be better? Our designers have all the
              tools to modify a pair based on your specific needs. Customise
              your shoes to truly stand out.
            </p>
          </li>
          <li>
            <figure>
              <img src={imageThree} />
              <figcaption>
                <h3>Order Anything</h3>
              </figcaption>
            </figure>
            <p>
              Send us a link and we will do all the ordering for you. Save
              yourself the hassle of dealing with delivery issues and other
              problems. For a nominal fee, we will take care of everything for
              you.
            </p>
          </li>

          <li>
            <figure>
              <img src={imageThree} />
              <figcaption>
                <h3>Order Anything</h3>
              </figcaption>
            </figure>
            <p>
              Send us a link and we will do all the ordering for you. Save
              yourself the hassle of dealing with delivery issues and other
              problems. For a nominal fee, we will take care of everything for
              you.
            </p>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Benefits
