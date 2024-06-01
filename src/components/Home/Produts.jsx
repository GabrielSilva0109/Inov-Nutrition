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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  overflow: hidden;
`;

const Box = styled.div`
  color: #333;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 300px;
  text-align: center;
  flex-shrink: 0;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  background: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 10px;
`;

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
`;

const Text = styled.div`
  font-size: 1rem;
`;

const Products = () => {
  const sliderRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const boxes = [
    { title: 'Proteinas', subtitle: 'Subtitle 1', linkText: 'Link 1', text: 'Text 1' },
    { title: 'Aminoacidos', subtitle: 'Subtitle 2', linkText: 'Link 2', text: 'Text 2' },
    { title: 'Termogenicos', subtitle: 'Subtitle 3', linkText: 'Link 3', text: 'Text 3' },
    { title: 'Vitaminas', subtitle: 'Subtitle 1', linkText: 'Link 1', text: 'Text 1' },
    { title: 'Fitoterapiticos', subtitle: 'Subtitle 2', linkText: 'Link 2', text: 'Text 2' },
    { title: 'Colagenos', subtitle: 'Subtitle 3', linkText: 'Link 3', text: 'Text 3' },
  ];

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
  };

  return (
    <Container>
      <Main>
        <Slider {...settings} ref={sliderRef}>
          {boxes.map((box, index) => (
            <Box key={index}>
              <Title>{box.title}</Title>
              <SubTitle>
                {box.subtitle}<br />
                <span><Link to="#">{box.linkText}</Link></span>
              </SubTitle>
              <Text>{box.text}</Text>
            </Box>
          ))}
        </Slider>
      </Main>
    </Container>
  );
};

export default Products;
