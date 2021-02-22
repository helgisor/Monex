// import { createGlobalStyle } from "styled-components"

// export const GlobalStyle = createGlobalStyle`
//   * {
//     font-family: 'Roboto', sans-serif;
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `

// import { createGlobalStyle } from "styled-components"

// export const GlobalStyle = createGlobalStyle`
//   * {
//     font-family: "Roboto", sans-serif;
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-margin-top: 80px;


      
	

    @media screen and (max-width: 768px) {
      scroll-margin-top: 48px;

  }
  /* @media screen and (max-width: 1024px) {
      scroll-margin-top: 64px;

  } */
  }

  /* html{
  width: 100vw;
  overflow-x: hidden;
} */

  .scroll-btn {
  position: fixed;
  right: 3rem;
  bottom: 1.5rem;
  background: #14A76C;
  color: #fff;
  z-index: -100;
  opacity: 0;
  transition: 0.5s;
  font-size: 2rem;
  line-height: 0;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #14A76C;
  outline: none;
  transform: perspective(1px) translateZ(0);
}
.show-scroll-btn {
  z-index: 100;
  opacity: 1;
}
.scroll-btn:before {
  content: '';
  position: absolute;
  border: 6px solid #14A76C;
  /* border: #63b0e9 solid 6px; */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation-duration: 1s;
  border-radius: 50%;
}
.scroll-btn:focus:before {
  animation-name: hvr-ripple-out;
}
@keyframes hvr-ripple-out {
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
}

.first, .second, .third, .fourth, .fifth, .sixth, .seventh {
  transition: 0.3s;
}

.largeLetter {
  font-size: 50px;
  color: white;

}
.smallLetter {
  font-size: 40px;
  color: lightsalmon;
}

/* .ml9 {
  position: relative;
 

  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
}

.ml9 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml9 .letter {
  transform-origin: 50% 100%;
  display: inline-block;
  line-height: 0.3em;

} */

/* .ml14 {

  font-size: clamp(1.5rem, 6vw, 4rem);
}

.ml14 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml14 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #fff;
  transform-origin: 100% 100%;
  bottom: 0;
}

.ml14 .letter {
  display: inline-block;
  line-height: 1em;
} */

.Trips__ProductImg-jBsUMo {
background: #9e5406;
}


.ml11 {
  font-size: clamp(1.5rem, 6vw, 4rem);
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 { 
  top: 0; 
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}

.ml7 {
  position: relative;
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: -1rem;
}
.ml7 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}
.ml7 .letter {
  transform-origin: 0 100%;
  display: inline-block;
  line-height: 1em;
}

.pop_in {
  animation-name: hvr-pop;
  animation-duration: 0.35s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  transition: 0.4s;
  height: 80px;
  padding: 0.5rem calc((100vw - 1300px) / 2);
}


.pop_out {
  animation-name: hvr-push;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  /* animation-iteration-count: 1; */
  /* background: rgb(220,220,220, 0.94); */
  background: rgb(51,51,51, 0.85);
  transition: 0.4s;
  padding: 0.5rem !important;
  /* height: 40px !important; */
  color: black !important;

  /* opacity: 0.6;  */
}

/* .zen {
  transition: 0.3s;
} */

.navColorDown {
  color: #14A76C !important;
  /* color: white !important; */
  /* color: white !important; */
  font-weight: bold;
  
}

/* .navColorDown:hover {
  color: green !important;
} */


.navColorUp {
  color: white;

}

.menuNone {
  color: #fff;
}

.menuVisible {
  color: black;
}
/* .navLink { 
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  z-index: 10;
  transition: 0.3s;
} */


.navLink,
.logo { 
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  z-index: 10;
  transition: 0.3s;
  position: relative;
  text-decoration: none;
  letter-spacing: 0;
  transition: 0.3s;
}

/* .navLink:hover
{
  color: #14A76C;
  transition: 0.3s;
  font-weight: 500;
} */

.navLink:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #14A76C;
  height: 4px;
  transition-property: right;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  margin-bottom: 7px;
}
/* .navLink:hover:before, .navLink:focus:before, .navLink:active:before, .navLink:active:visited {
  right: 0;
} */

.navLink:active:before, .navLink:hover:before, .navLink:visited:before {
  right: 0;
}

/* .navLink:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: green;
  height: 4px;
  transition-property: left, right;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
.navLink:hover:before {
  left: 0;
  right: 0;
} */



.navBar {
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  top: 0;
  z-index: 100;
  position: sticky;

  @media screen and (max-width: 768px) {
    height: 50px;

  }
}

.dropDownLinks {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}

.button {
  /* background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")}; */
  /* background: #F26A2E; */
  background: #14A76C;
  white-space: nowrap;
  /* padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")}; */
  padding: 16px 40px;
  color: #fff;
  /* font-size: ${({ big }) => (big ? "20px" : "16px")}; */
  font-size: 20px;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 50px;
  position: relative;
  margin-bottom: -1rem;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 10px 32px;
  }


&:hover::before {
  opacity: 0 ;
  border-radius: 50px;
  transform: scale(0.5,0.5);

}

&::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;

  transition: all 0.5s;
  border: 3px solid #14A76C;
  transform: scale(1.2,1.2);
  border-radius: 50px;
 
}

&:hover::after {
  opacity: 1;
  transform: scale(1,1);
  border-radius: 50px;

}

&:hover {
  background: none;
  /* color: #14A76C; */
  
}






}
` 
