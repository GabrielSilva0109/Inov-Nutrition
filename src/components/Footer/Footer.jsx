import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, Redes } from '../UI/Base'
import Icone from '../UI/Icone'
import { Marca } from '../Header/Header'
import { LOJA, WHATSAPP, paginas } from '../../data/marca'

const Rodape = styled.footer`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  margin-top: calc(var(--corte) * -1);
  padding-top: calc(var(--corte) + clamp(56px, 8vw, 96px));
  background:
    radial-gradient(60% 70% at 100% 0%, rgba(47, 123, 255, 0.25), transparent 60%),
    var(--marinho);
  color: var(--texto-claro);
  clip-path: polygon(0 var(--corte), 100% 0, 100% 100%, 0 100%);
  z-index: 2;
`

const Grade = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(0, 1fr));
  gap: 40px;

  @media (max-width: 760px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    .marca {
      grid-column: 1 / -1;
    }
  }

  .marca {
    color: var(--branco);
  }

  .marca p {
    margin: 18px 0 22px;
    max-width: 38ch;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 1.05rem;
    font-style: italic;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--azul-claro);
  }

  .links {
    display: grid;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .links a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 36px;
    text-decoration: none;
    color: var(--texto-claro);
    transition:
      color var(--rapido),
      transform var(--medio) var(--ease-out);
  }

  @media (hover: hover) {
    .links a:hover {
      color: var(--branco);
      transform: translateX(4px);
    }
  }
`

const Gigante = styled.p`
  margin-top: clamp(48px, 8vw, 96px);
  padding-inline: var(--gutter);
  font-family: var(--fonte-display);
  font-style: italic;
  font-weight: 900;
  font-size: clamp(4rem, 17vw, 17rem);
  line-height: 0.8;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px rgba(139, 188, 255, 0.35);
  background: linear-gradient(90deg, var(--azul-vivo), var(--branco)) no-repeat;
  background-size: 0% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  transition: background-size 1.2s var(--ease-out);
  user-select: none;

  @media (hover: hover) {
    &:hover {
      background-size: 100% 100%;
    }
  }
`

const Base = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  margin-top: 28px;
  padding-block: 24px calc(24px + env(safe-area-inset-bottom));
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.92rem;

  .company {
    font-weight: 700;
    color: var(--branco);
  }

  a {
    font-weight: 700;
    color: var(--branco);
    text-decoration: none;
    background: linear-gradient(currentColor, currentColor) 0 100% / 0 2px no-repeat;
    transition: background-size var(--medio) var(--ease-out);
  }

  @media (hover: hover) {
    a:hover {
      background-size: 100% 2px;
    }
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 0 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    background: transparent;
    color: var(--branco);
    font-weight: 600;
    transition:
      background var(--medio),
      transform var(--rapido) var(--ease-out);
  }

  button svg {
    transition: transform var(--medio) var(--ease-pop);
  }

  @media (hover: hover) {
    button:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    button:hover svg {
      transform: translateY(-3px);
    }
  }

  button:active {
    transform: scale(0.96);
  }
`

const Footer = () => {
  const topo = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Rodape>
      <Grade>
        <div className="marca">
          <Marca />
          <p style={{ color: 'var(--texto-claro)' }}>
            Desenvolvendo o futuro da Suplementação, Saúde e Bem estar. Força, energia e foco em cada dose.
          </p>
          <Redes claro />
        </div>

        <nav aria-label="Rodapé">
          <h3>Navegue</h3>
          <ul className="links">
            {paginas.map((p) => (
              <li key={p.to}>
                <Link to={p.to}>{p.nome}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Atendimento</h3>
          <ul className="links">
            <li>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Icone nome="whatsapp" tamanho={18} /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/inovnutrition/" target="_blank" rel="noopener noreferrer">
                <Icone nome="instagram" tamanho={18} /> @inovnutrition
              </a>
            </li>
            <li>
              <a href={LOJA} target="_blank" rel="noopener noreferrer">
                <Icone nome="carrinho" tamanho={18} /> Loja oficial
              </a>
            </li>
          </ul>
        </div>
      </Grade>

      <Gigante aria-hidden="true">Inov Nutrition</Gigante>

      <Base>
        <span>
          ©CopyRight {new Date().getFullYear()} <span className="company">Inov Nutrition</span>
        </span>
        <span>
          Desenvolvido por{' '}
          <a href="https://gabriel-silva-dev.vercel.app/" target="_blank" rel="noopener noreferrer">
            @Gabriel Silva
          </a>
        </span>
        <button type="button" onClick={topo}>
          <Icone nome="setaCima" tamanho={18} />
          Voltar ao topo
        </button>
      </Base>
    </Rodape>
  )
}

export default Footer
