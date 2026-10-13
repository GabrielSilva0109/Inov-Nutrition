import React from 'react'
import styled from 'styled-components'
import { Container, Kicker, Secao, TituloSecao } from '../UI/Base'
import Icone from '../UI/Icone'
import { diferenciais } from '../../data/marca'

const Grade = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 20px;
  margin: clamp(32px, 5vw, 56px) 0 0;
  padding: 0;
  list-style: none;
`

const Topico = styled.li`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px 28px 30px;
  border-radius: var(--raio);
  background: var(--branco);
  border: 1px solid var(--borda);
  box-shadow: var(--sombra-1);
  transition:
    transform var(--medio) var(--ease-out),
    box-shadow var(--medio) var(--ease-out);

  /* barra azul inclinada que se enche no topo */
  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    height: 6px;
    width: calc(100% + 20px);
    background: linear-gradient(90deg, var(--azul), var(--azul-vivo));
    transform: scaleX(0.18) skewX(var(--inclinacao));
    transform-origin: 0 50%;
    transition: transform 600ms var(--ease-out);
  }

  .cabeca {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icone {
    display: grid;
    place-items: center;
    width: 58px;
    height: 58px;
    border-radius: 16px;
    background: var(--azul);
    color: var(--branco);
    box-shadow: 0 10px 24px -10px rgba(11, 84, 166, 0.8);
    transition: transform 500ms var(--ease-pop);
  }

  .numero {
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 900;
    font-size: 3rem;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px var(--borda-forte);
  }

  h3 {
    font-size: 1.75rem;
    font-style: italic;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1;
  }

  p {
    color: var(--texto-2);
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
      box-shadow: var(--sombra-2);
    }
    &:hover::before {
      transform: scaleX(1) skewX(var(--inclinacao));
    }
    &:hover .icone {
      transform: rotate(-10deg) scale(1.1);
    }
  }
`

const Topics = () => {
  return (
    <Secao $tom="suave">
      <Container>
        <div data-reveal="up">
          <Kicker>Por que Inov</Kicker>
          <TituloSecao>
            Seis motivos pra <em>treinar</em> com a gente
          </TituloSecao>
        </div>

        <Grade>
          {diferenciais.map((d, i) => (
            <Topico key={d.titulo} data-reveal="up" style={{ '--d': i }}>
              <div className="cabeca">
                <span className="icone" aria-hidden="true">
                  <Icone nome={d.icone} tamanho={28} />
                </span>
                <span className="numero" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3>{d.titulo}</h3>
              <p>{d.texto}</p>
            </Topico>
          ))}
        </Grade>
      </Container>
    </Secao>
  )
}

export default Topics
