import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, Kicker, Lead, Secao, TituloSecao } from '../UI/Base'
import Icone from '../UI/Icone'
import { objetivos } from '../../data/marca'

const Topo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 40px;
  margin-bottom: clamp(32px, 5vw, 56px);

  .dica {
    display: none;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: var(--texto-3);
  }

  @media (max-width: 760px) {
    .dica {
      display: inline-flex;
    }
  }
`

const Grade = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* celular: trilho com rolagem e encaixe, mostrando o próximo cartão */
  @media (max-width: 760px) {
    grid-template-columns: none;
    grid-auto-flow: column;
    grid-auto-columns: 84%;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--gutter);
    margin-inline: calc(var(--gutter) * -1);
    padding: 8px var(--gutter) 24px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      scroll-snap-align: start;
    }
  }
`

const Cartao = styled(Link)`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 360px;
  padding: 28px;
  border-radius: var(--raio);
  background: var(--branco);
  border: 1px solid var(--borda);
  box-shadow: var(--sombra-1);
  color: var(--texto);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    transform var(--medio) var(--ease-out),
    box-shadow var(--medio) var(--ease-out),
    border-color var(--medio),
    color 380ms;

  /* painel azul que sobe em diagonal no hover */
  &::before {
    content: '';
    position: absolute;
    inset: -20% -10%;
    z-index: -1;
    background: linear-gradient(150deg, var(--azul-vivo), var(--azul) 45%, var(--azul-forte));
    transform: translateY(105%) skewY(-12deg);
    transition: transform 560ms var(--ease-out);
  }

  .numero {
    position: absolute;
    right: 20px;
    top: 8px;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 900;
    font-size: 6rem;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px var(--borda-forte);
    transition:
      -webkit-text-stroke-color 380ms,
      transform 560ms var(--ease-out);
  }

  .icone {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: var(--azul-50);
    color: var(--azul);
    transition:
      background 380ms,
      color 380ms,
      transform 500ms var(--ease-pop);
  }

  h3 {
    margin-top: auto;
    padding-top: 40px;
    font-size: 2.6rem;
    font-style: italic;
    font-weight: 900;
    text-transform: uppercase;
  }

  .sub {
    margin-top: 6px;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--azul);
    transition: color 380ms;
  }

  p {
    margin-top: 12px;
    color: var(--texto-2);
    font-size: 0.98rem;
    transition: color 380ms;
  }

  .mais {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    font-weight: 700;
    color: var(--azul);
    transition: color 380ms;
  }

  .mais svg {
    transition: transform var(--medio) var(--ease-out);
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
      box-shadow: var(--sombra-azul);
      border-color: transparent;
      color: var(--branco);
    }
    &:hover::before {
      transform: translateY(0) skewY(-12deg);
    }
    &:hover .numero {
      -webkit-text-stroke-color: rgba(255, 255, 255, 0.45);
      transform: translateX(-8px) scale(1.08);
    }
    &:hover .icone {
      background: var(--branco);
      transform: rotate(-10deg) scale(1.08);
    }
    &:hover .sub,
    &:hover .mais {
      color: var(--branco);
    }
    &:hover p {
      color: #dfeafb;
    }
    &:hover .mais svg {
      transform: translateX(6px);
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    box-shadow: var(--anel);
    border-radius: var(--raio);
  }
`

const Produts = () => {
  return (
    <Secao $tom="suave" style={{ paddingTop: 'clamp(56px, 8vw, 110px)' }}>
      <Container>
        <Topo>
          <div data-reveal="up">
            <Kicker>Linha completa</Kicker>
            <TituloSecao>
              Escolha o seu <em>objetivo</em>
            </TituloSecao>
            <Lead>Do ganho de massa à recuperação: cada fórmula foi pensada para uma etapa do seu treino.</Lead>
          </div>
          <span className="dica" aria-hidden="true">
            Arraste para ver mais <Icone nome="seta" tamanho={18} />
          </span>
        </Topo>

        <Grade>
          {objetivos.map((box, index) => (
            <li key={box.title} data-reveal="up" style={{ '--d': index }}>
              <Cartao to={`/produtos?categoria=${box.categoria}`}>
                <span className="numero" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="icone" aria-hidden="true">
                  <Icone nome={box.icone} tamanho={28} />
                </span>
                <h3>{box.title}</h3>
                <span className="sub">{box.subtitle}</span>
                <p>{box.text}</p>
                <span className="mais">
                  {box.linkText}
                  <Icone nome="seta" tamanho={18} traco={2.5} />
                </span>
              </Cartao>
            </li>
          ))}
        </Grade>
      </Container>
    </Secao>
  )
}

export default Produts
