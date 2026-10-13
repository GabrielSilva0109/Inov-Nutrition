import React from 'react'
import styled from 'styled-components'
import { Container, PageHero, Secao } from '../UI/Base'
import Icone from '../UI/Icone'
import { redes } from '../../data/marca'

const Grade = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: calc(var(--corte) * -1.4) 0 0;
  padding: 0;
  list-style: none;
  position: relative;
  z-index: 2;

  li:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }

  li:last-child {
    grid-column: span 2;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    li:first-child {
      grid-row: auto;
    }
    li:last-child {
      grid-column: auto;
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
    li:first-child {
      grid-column: auto;
    }
  }
`

const Canal = styled.a`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  min-height: 220px;
  padding: 28px;
  border-radius: var(--raio);
  background: var(--branco);
  border: 1px solid var(--borda);
  box-shadow: var(--sombra-2);
  color: var(--texto);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    transform var(--medio) var(--ease-out),
    box-shadow var(--medio) var(--ease-out),
    color 380ms;

  &::before {
    content: '';
    position: absolute;
    inset: -20% -10%;
    z-index: -1;
    background: linear-gradient(150deg, var(--azul-vivo), var(--azul) 50%, var(--azul-forte));
    transform: translateX(-105%) skewX(var(--inclinacao));
    transition: transform 560ms var(--ease-out);
  }

  .icone {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: var(--azul-50);
    color: var(--azul);
    transition:
      transform 500ms var(--ease-pop),
      background 380ms;
  }

  .seta {
    position: absolute;
    right: 24px;
    top: 24px;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid var(--borda-forte);
    transition:
      transform var(--medio) var(--ease-out),
      border-color 380ms;
  }

  h2 {
    margin-top: auto;
    font-size: 2.2rem;
    font-style: italic;
    font-weight: 900;
    text-transform: uppercase;
  }

  .contato {
    font-weight: 700;
    color: var(--azul);
    overflow-wrap: anywhere;
    transition: color 380ms;
  }

  p {
    color: var(--texto-2);
    transition: color 380ms;
  }

  /* cartão principal: WhatsApp */
  &.principal {
    background: linear-gradient(140deg, var(--azul-forte), var(--azul) 60%, var(--azul-vivo));
    color: var(--branco);
    border-color: transparent;
    box-shadow: var(--sombra-azul);
    min-height: 100%;
    padding: clamp(28px, 4vw, 48px);
  }

  &.principal::before {
    background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0 14px, transparent 14px 32px);
    left: 45%;
    transform: skewX(var(--inclinacao));
  }

  &.principal .icone {
    width: 72px;
    height: 72px;
    background: var(--branco);
  }

  &.principal h2 {
    font-size: clamp(3rem, 6vw, 5rem);
  }

  &.principal .contato {
    color: var(--branco);
    font-family: var(--fonte-display);
    font-style: italic;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-variant-numeric: tabular-nums;
  }

  &.principal p {
    color: #e1ecfc;
    font-size: 1.1rem;
  }

  &.principal .seta {
    border-color: rgba(255, 255, 255, 0.5);
  }

  .tag {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    font-size: 0.85rem;
    font-weight: 700;
  }

  .tag i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #6ee7a8;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
    }
    &:not(.principal):hover {
      color: var(--branco);
      box-shadow: var(--sombra-azul);
    }
    &:not(.principal):hover::before {
      transform: translateX(0) skewX(var(--inclinacao));
    }
    &:hover .icone {
      background: var(--branco);
      transform: rotate(-10deg) scale(1.08);
    }
    &:not(.principal):hover .contato,
    &:not(.principal):hover p {
      color: var(--branco);
    }
    &:hover .seta {
      transform: rotate(45deg);
      border-color: rgba(255, 255, 255, 0.7);
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

const Contact = () => {
  return (
    <>
      <PageHero
        kicker="Contato"
        linhas={['Entre em', <span className="contorno">contato!</span>]}
        texto="Estamos aqui para ajudar. Se você tiver qualquer dúvida ou precisar de mais informações, não hesite em nos procurar. Nosso time está pronto para atender você!"
        palavraFundo="Fale"
      />

      <Secao style={{ paddingTop: 0, background: 'transparent' }}>
        <Container>
          <Grade>
            {redes.map((r, i) => (
              <li key={r.id} data-reveal="up" style={{ '--d': i }}>
                <Canal
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={i === 0 ? 'principal' : undefined}
                >
                  <span className="icone" aria-hidden="true">
                    <Icone nome={r.icone} tamanho={i === 0 ? 34 : 26} />
                  </span>
                  <span className="seta" aria-hidden="true">
                    <Icone nome="setaDiagonal" tamanho={20} />
                  </span>
                  {i === 0 && (
                    <span className="tag">
                      <i aria-hidden="true" /> Resposta rápida
                    </span>
                  )}
                  <h2>{r.nome}</h2>
                  <span className="contato">{r.contato}</span>
                  <p>{r.descricao}</p>
                </Canal>
              </li>
            ))}
          </Grade>
        </Container>
      </Secao>
    </>
  )
}

export default Contact
