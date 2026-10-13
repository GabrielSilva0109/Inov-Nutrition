import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Icone from '../UI/Icone'
import { useReveal } from '../UI/movimento'
import { WHATSAPP } from '../../data/marca'

const passar = keyframes`
  0%   { transform: translateX(-120%) skewX(-12deg); }
  42%,
  58%  { transform: translateX(0) skewX(-12deg); }
  100% { transform: translateX(120%) skewX(-12deg); }
`

// Cortina diagonal que atravessa a tela na troca de página
const Cortina = styled.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  pointer-events: none;
  overflow: hidden;

  span {
    position: absolute;
    inset: 0 -25%;
    animation: ${passar} 900ms var(--ease-out) both;
  }

  span:nth-child(1) {
    background: var(--azul);
  }

  span:nth-child(2) {
    background: var(--marinho);
    animation-delay: 70ms;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`

const Conteudo = styled.main`
  overflow-x: clip;
  animation: aparecer 500ms var(--ease-out) 300ms backwards;
`

const Fab = styled.a`
  position: fixed;
  right: max(16px, env(safe-area-inset-right));
  bottom: max(16px, env(safe-area-inset-bottom));
  z-index: 90;
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--azul);
  color: var(--branco);
  box-shadow: var(--sombra-azul);
  transition: transform var(--medio) var(--ease-pop);

  /* um único anel "ao vivo", discreto */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--azul-vivo);
    z-index: -1;
    animation: pulsar 2.4s var(--ease-out) infinite;
  }

  .dica {
    position: absolute;
    right: calc(100% + 12px);
    padding: 8px 14px;
    border-radius: 10px;
    background: var(--marinho);
    color: var(--branco);
    font-weight: 600;
    font-size: 0.9rem;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(8px);
    pointer-events: none;
    transition:
      opacity var(--rapido),
      transform var(--medio) var(--ease-out);
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.08) rotate(-6deg);
    }
    &:hover .dica {
      opacity: 1;
      transform: none;
    }
  }

  &:active {
    transform: scale(0.94);
  }
`

const Layout = () => {
  const { pathname } = useLocation()
  const anterior = useRef(pathname)
  const [trocas, setTrocas] = useState(0)

  useReveal(pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
    // compara com o valor anterior (StrictMode roda o efeito duas vezes ao montar)
    if (anterior.current !== pathname) {
      anterior.current = pathname
      setTrocas((n) => n + 1)
    }
  }, [pathname])

  return (
    <>
      <a href="#conteudo" className="pular">
        Pular para o conteúdo
      </a>
      <Header />
      {trocas > 0 && (
        <Cortina key={trocas} aria-hidden="true">
          <span />
          <span />
        </Cortina>
      )}
      <Conteudo id="conteudo" key={pathname}>
        <Outlet />
      </Conteudo>
      <Footer />
      <Fab href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Fale com a gente no WhatsApp">
        <Icone nome="whatsapp" tamanho={28} />
        <span className="dica" aria-hidden="true">
          Fale no WhatsApp
        </span>
      </Fab>
    </>
  )
}

export default Layout
