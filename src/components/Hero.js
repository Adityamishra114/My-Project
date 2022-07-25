import React,{ useState , useRef, useEffect} from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import GlobalStyle from "../globalStyles";


const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;
const HeroWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden:
position:relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-item: center;
  justify-content: center;

  &::before{
    content:'';
    position:absolute;
    z-index:2;
    width:100%;
    height:100%;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%);
  }
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width:100vw;
height:100vh;
// object-fit:cover;
object-fit: fill;
opacity:0.9;
`;
const HeroContent = styled.div`
position:relative;
z-index:10;
display:flex;
flex-direction:column;
max-width: 1600px;
width: cal(100%-100px);
color:#fff;
justify-content:center;
align-items:center;
color:#000;



h1{
  font-size:clamp(1rem, 30px, 3rem);
  font-weight:400;
  text-transform:uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  text-align:center;
  margin-bottom:0.8rem;
  color:#d6200f;
  padding: 1rem 30rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    display:columns;
    margin-right:60px;
  }


}
// p{
//   margin-bottom:1.2rem;
//   text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

// }`;

const SliderButtons = styled.div`
  position: absloute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10; 
  }
 
`;

// const arrowButtons = css`
//   width: 50px;
//   height: 50px;
//   color: #fff;
//   cursor: pointer;
//   background: #000d1a;
//   border-radius: 50px;
//   padding: 10px;
//   margin-right: 1rem;
//   user-select: none;
//   transition: 0.3s;
 
 
 

//   &:hover {
//     background: #cd853f;
//     transform: scale(1.05);
//   }
// `;
const PrevArrow = styled(IoArrowBack)`

  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 76rem;
  user-select: none;
  transition: 0.3s;
 

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    margin-right:1rem ! important;
    
    
  }
`;

const NextArrow = styled(IoArrowForward)`

  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s; 

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    margin-left:37rem ! important;
    
  }
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

  useEffect(() =>{
    const nextSlide = () =>{
    setCurrent(current => (current === length -1 ? 0 : current + 1))
  }
  timeout.current = setTimeout(nextSlide, 3000);

  return function (){
    if(timeout.current){
      clearTimeout(timeout.current);
    }
  }
  }, [current, length])

  const nextSlide = () => {
    if(timeout.current){
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    if(timeout.current){
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current -1)
  }
  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider >
                <HeroImage src={slide.image} alt={slide.alt} className="head-text" />
                <HeroContent className="center-text">
                  <h1>{slide.title}</h1>
                  <Button
                    to={slide.path}
                    primary="true"
                    css={`
                      max-width: 240px;
                      font-size:28px;
                      border-radius:20px;
                      &:hover {
                        background-color: #f00a24;
                      }
                    `}
                  >
                    {slide.label}
                  </Button>
                </HeroContent>
              </HeroSlider>
              )}
              
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow  onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;