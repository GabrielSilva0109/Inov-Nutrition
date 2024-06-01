import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  
`

const Main = styled.div`
  overflow: hidden;
`

const Box = styled.div`
  color: #333;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 300px;
  text-align: center;
  flex-shrink: 0;
`

const Title = styled.h1`
  font-size: 1.8rem;
  background: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 10px;
`

const SubTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;

  & span:hover {
    background: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Text = styled.div`
  color: gray;
  font-size: 1rem;
  font-weight: bold;
  text-align: justify;
`

const Products = () => {
  const sliderRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const boxes = [
    { 
      title: 'Proteinas', 
      subtitle: 'Aumente seus músculos', 
      linkText: 'Saiba mais', 
      text: 'As proteínas são essenciais para o crescimento muscular e a recuperação após o exercício. Descubra nossas opções de proteínas de alta qualidade para alcançar seus objetivos de fitness.' 
    },
    { 
      title: 'Aminoacidos', 
      subtitle: 'Melhore seu desempenho', 
      linkText: 'Confira agora', 
      text: 'Os aminoácidos são os blocos de construção dos músculos. Descubra nossas opções de aminoácidos essenciais e melhore seu desempenho atlético.' 
    },
    { 
      title: 'Termogenicos', 
      subtitle: 'Queime gordura mais rápido', 
      linkText: 'Veja nossas opções', 
      text: 'Os termogênicos aumentam a taxa metabólica e ajudam a queimar gordura mais rapidamente. Explore nossa seleção de termogênicos para alcançar seus objetivos de perda de peso.' 
    },
    { 
      title: 'Vitaminas', 
      subtitle: 'Mantenha-se saudável', 
      linkText: 'Descubra mais', 
      text: 'As vitaminas desempenham um papel crucial na manutenção da saúde. Conheça nossas opções de vitaminas para fortalecer seu sistema imunológico e melhorar sua saúde geral.' 
    },
    { 
      title: 'Fitoterapiticos', 
      subtitle: 'Remédios naturais', 
      linkText: 'Conheça nossas opções', 
      text: 'Os fitoterápicos oferecem uma abordagem natural para tratar uma variedade de condições de saúde. Descubra nossas opções de fitoterápicos para uma vida mais saudável.' 
    },
    { 
      title: 'Colagenos', 
      subtitle: 'Pele jovem e saudável', 
      linkText: 'Saiba mais aqui', 
      text: 'O colágeno é essencial para a saúde da pele, cabelos e unhas. Explore nossas opções de colágeno para uma aparência jovem e uma pele saudável.' 
    },
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: currentPage,
    afterChange: (index) => setCurrentPage(index),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  }

  const handleNext = () => {
    sliderRef.current.slickNext();
  }

  return (
    <Container>
      <Main>
        <Slider {...settings} ref={sliderRef}>
          {boxes.map((box, index) => (
            <Box key={index}>
              <Title>{box.title}</Title>
              <SubTitle>
                {box.subtitle}<br />
                
              </SubTitle>
              <Text>{box.text}</Text>
              
            </Box>
          ))}
        </Slider>
      </Main>
    </Container>
  )
}

export default Products