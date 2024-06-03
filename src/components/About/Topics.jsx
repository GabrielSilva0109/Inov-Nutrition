import React from 'react'
import styled from 'styled-components'

import whey from '../../Img/Icons/whey.png'
import caps from '../../Img/Icons/caps.png'
import result from '../../Img/Icons/result.png'
import flavor from '../../Img/Icons/flavor.png'
import money from '../../Img/Icons/money.png'
import burn from '../../Img/Icons/burn.png'

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 1rem;
    color: white;

    @media(max-width: 768px){
        font-size: 1.3rem;
    }
`

const Text = styled.h3`
    font-size: 0.75rem;
    text-align: justify;
    color: lightgrey;
    @media(max-width: 768px){
        font-size: 0.8rem;
    }
`

const Img = styled.img`
    width: 40px;
`

const Topicos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 70%;
    gap: 10px;

    @media(max-width: 768px){
        flex-direction: column;
        width: 100%;
        gap: 5px;
    }
`

const Topico = styled.div`
    width: 30%;
    height: 250px;
    border: 2px solid white;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    box-shadow: inset 0px 0px 10px 0px rgba(255,255,255,0.75); 

    @media(max-width: 768px){
        width: 80%;
        height: 270px;
    }
`


const Topics = () => {
  return (
    <>
    <Section>
            <Topicos>

                <Topico>
                    <Img src={caps}/>
                    <Title>Pureza e qualidade em cada cápsula</Title>
                    <Text>Cada cápsula é uma promessa de qualidade e pureza, garantindo
                         uma experiência de suplementação confiável e eficaz. Com os mais 
                         altos padrões de controle de qualidade, oferecemos produtos que
                          impulsionam sua jornada de bem-estar.</Text>
                </Topico>

                <Topico>
                    <Img src={result}/>
                    <Title>Inovação para resultados excepcionais</Title>
                    <Text>Nossa constante pesquisa e inovação resultam em produtos que
                         superam as expectativas, oferecendo os últimos avanços em nutrição
                          esportiva. Com nossa inovação, você alcança resultados excepcionais
                           rapidamente</Text>
                </Topico>

                <Topico>
                    <Img src={whey}/>
                    <Title>Excelência com matéria-prima de ponta</Title>
                    <Text>Do início ao fim, nossa dedicação à excelência começa com a seleção
                         cuidadosa das melhores matérias-primas.  Com ingredientes de ponta e 
                         processos de fabricação avançados, garantimos qualidade em cada dose.</Text>
                </Topico>
            </Topicos>
            <Topicos>
                <Topico>
                    <Img src={flavor}/>
                    <Title>Sabores irresistíveis</Title>
                    <Text>Descubra uma variedade de sabores irresistíveis que satisfazem 
                        até os paladares mais exigentes. De doce a cítrico, de frutado a cremoso, 
                        nossos suplementos oferecem uma ampla gama de opções para atender aos gostos
                        de todos, garantindo uma experiência agradável e personalizada</Text>
                </Topico>

                <Topico>
                    <Img src={money}/>
                    <Title>Qualidade premium a um preço acessível</Title>
                    <Text>Nossa missão é oferecer qualidade extrema com os melhores ingredientes 
                        e pelo melhor preço. Priorizamos a acessibilidade sem comprometer a qualidade,
                         para que todos possam desfrutar dos benefícios de uma vida mais saudável</Text>
                </Topico>

                <Topico>
                    <Img />
                    <Title></Title>
                    <Text></Text>
                </Topico>
            </Topicos>
              
    </Section>
    </>
  )
}

export default Topics
