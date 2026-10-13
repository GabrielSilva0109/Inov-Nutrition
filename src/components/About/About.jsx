import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Acoes, Botao, Container, Kicker, PageHero } from '../UI/Base'
import Icone from '../UI/Icone'
import Topics from './Topics'
import { LOJA } from '../../data/marca'

import health from '../../Img/healthy.png'

const Ilustracao = styled.div`
  position: relative;
  width: min(100%, 460px);
  margin-inline: auto;
  aspect-ratio: 1;
  display: grid;
  place-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 4%;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ffffff, var(--azul-100) 70%);
    box-shadow: 0 30px 80px -20px rgba(47, 123, 255, 0.6);
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2%;
    border-radius: 50%;
    border: 2px dashed rgba(139, 188, 255, 0.5);
    animation: girar 30s linear infinite;
  }

  img {
    position: relative;
    z-index: 1;
    width: 88%;
  }
`

/* Manifesto: as palavras acendem conforme a seção atravessa a tela */

const Manifesto = styled.section`
  position: relative;
  padding-block: clamp(72px, 12vw, 160px);
  background: var(--fundo);

  p {
    margin-top: 1.4rem;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 900;
    font-size: clamp(2.4rem, 6.4vw, 5.6rem);
    line-height: 0.98;
    text-transform: uppercase;
  }

  .palavra {
    opacity: clamp(0.14, calc(var(--p, 0) * var(--n) - var(--i) + 1), 1);
    transition: opacity 120ms linear;
  }

  .palavra.destaque {
    color: var(--azul);
  }

  @media (prefers-reduced-motion: reduce) {
    .palavra {
      opacity: 1;
    }
  }
`

const frase = 'Inov Suplementos é mais que uma marca: é um compromisso com a sua excelência pessoal.'
const destaques = ['compromisso', 'excelência']

const TextoQueAcende = () => {
  const ref = useRef(null)
  const palavras = frase.split(' ')

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    let quadro = 0
    const atualizar = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 quando o topo entra por baixo; 1 quando o centro passa de 40% da tela
      const p = (vh - r.top) / (vh * 0.6 + r.height * 0.5)
      el.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3))
    }
    const aoRolar = () => {
      cancelAnimationFrame(quadro)
      quadro = requestAnimationFrame(atualizar)
    }
    atualizar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('resize', aoRolar)
    return () => {
      cancelAnimationFrame(quadro)
      window.removeEventListener('scroll', aoRolar)
      window.removeEventListener('resize', aoRolar)
    }
  }, [])

  return (
    <p ref={ref} style={{ '--n': palavras.length }}>
      {palavras.map((w, i) => (
        <React.Fragment key={i}>
          <span
            className={`palavra${destaques.some((d) => w.startsWith(d)) ? ' destaque' : ''}`}
            style={{ '--i': i }}
          >
            {w}
          </span>{' '}
        </React.Fragment>
      ))}
    </p>
  )
}

const Convite = styled.section`
  padding: clamp(24px, 4vw, 48px) 0 calc(var(--corte) + 80px);
  background: var(--fundo);
`

const ConviteCaixa = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px 48px;
  padding-top: clamp(32px, 5vw, 56px);
  border-top: 2px solid var(--borda);

  p {
    max-width: 36ch;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 800;
    font-size: clamp(1.8rem, 3.6vw, 2.8rem);
    line-height: 1.05;
    text-transform: uppercase;
  }

  ${Acoes} {
    margin-top: 0;
  }

  @media (max-width: 860px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

const About = () => {
  return (
    <>
      <PageHero
        kicker="Sobre a Inov"
        linhas={['Transformando', <>sua <em>performance</em></>, <span className="contorno">e saúde.</span>]}
        texto="Nossos produtos são cuidadosamente elaborados para impulsionar sua jornada de saúde e desempenho, refletindo nosso compromisso com a inovação e qualidade."
        palavraFundo="Inov"
        aside={
          <Ilustracao>
            <img src={health} alt="Ilustração de uma atleta correndo cercada de hábitos saudáveis" />
          </Ilustracao>
        }
      />

      <Manifesto>
        <Container>
          <Kicker data-reveal="up">Nosso manifesto</Kicker>
          <TextoQueAcende />
        </Container>
      </Manifesto>

      <Topics />

      <Convite>
        <ConviteCaixa data-reveal="up">
          <p>Junte-se a nós e experimente a diferença de uma abordagem que valoriza sua saúde em primeiro lugar.</p>
          <Acoes>
            <Botao as={Link} to="/produtos">
              Conhecer produtos
              <Icone nome="seta" tamanho={20} traco={2.5} />
            </Botao>
            <Botao href={LOJA} target="_blank" rel="noopener noreferrer" $variante="contornoEscuro">
              <Icone nome="carrinho" tamanho={18} />
              Loja oficial
            </Botao>
          </Acoes>
        </ConviteCaixa>
      </Convite>
    </>
  )
}

export default About
