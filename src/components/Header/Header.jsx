import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Botao, Redes } from '../UI/Base'
import Icone from '../UI/Icone'
import { LOJA, paginas } from '../../data/marca'

/* ---------- Marca ---------- */

const MarcaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  -webkit-tap-highlight-color: transparent;

  .simbolo {
    position: relative;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    transition: transform var(--medio) var(--ease-pop);
  }

  .simbolo::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 9px;
    background: var(--azul);
    transform: skewX(var(--inclinacao));
    box-shadow: 0 6px 18px -6px rgba(47, 123, 255, 0.8);
  }

  .simbolo span {
    position: relative;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 900;
    font-size: 1.6rem;
    color: var(--branco);
  }

  .nome {
    display: grid;
    line-height: 0.9;
    font-family: var(--fonte-display);
    font-style: italic;
    text-transform: uppercase;
  }

  .nome strong {
    font-weight: 900;
    font-size: 1.55rem;
    letter-spacing: 0.02em;
  }

  .nome small {
    font-weight: 700;
    font-size: 0.72rem;
    letter-spacing: 0.42em;
    opacity: 0.75;
  }

  @media (hover: hover) {
    &:hover .simbolo {
      transform: rotate(-8deg) scale(1.06);
    }
  }
`

export const Marca = ({ onClick }) => (
  <MarcaLink to="/" aria-label="Inov Nutrition, página inicial" onClick={onClick}>
    <span className="simbolo" aria-hidden="true">
      <span>I</span>
    </span>
    <span className="nome" aria-hidden="true">
      <strong>Inov</strong>
      <small>Nutrition</small>
    </span>
  </MarcaLink>
)

/* ---------- Barra ---------- */

const Barra = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  height: var(--header-h);
  color: ${({ $solido }) => ($solido ? 'var(--texto)' : 'var(--branco)')};
  transition: color var(--medio);

  /* O vidro fica num ::before para não virar containing block de elementos fixos */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: saturate(1.6) blur(16px);
    -webkit-backdrop-filter: saturate(1.6) blur(16px);
    box-shadow: 0 1px 0 var(--borda), 0 8px 24px -16px rgba(4, 19, 43, 0.3);
    opacity: ${({ $solido }) => ($solido ? 1 : 0)};
    transition: opacity var(--medio) var(--ease-out);
  }
`

const Progresso = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, var(--azul), var(--azul-vivo));
  transform-origin: 0 50%;
  transform: scaleX(0);
`

const Linha = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 100%;
  width: min(100% - 2 * var(--gutter), var(--largura));
  margin-inline: auto;
`

const Nav = styled.nav`
  position: relative;

  ul {
    position: relative;
    display: flex;
    gap: 4px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @media (max-width: 860px) {
    display: none;
  }
`

const Indicador = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  height: 42px;
  border-radius: 999px;
  background: ${({ $solido }) => ($solido ? 'var(--azul-100)' : 'rgba(255, 255, 255, 0.14)')};
  box-shadow: inset 0 0 0 1px ${({ $solido }) => ($solido ? 'rgba(11, 84, 166, 0.12)' : 'rgba(255, 255, 255, 0.18)')};
  opacity: 0;
  pointer-events: none;
  transition:
    transform 420ms var(--ease-out),
    width 420ms var(--ease-out),
    opacity var(--medio),
    background var(--medio);
`

const NavLink = styled(Link)`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  font-family: var(--fonte-display);
  font-style: italic;
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  opacity: ${({ $ativo }) => ($ativo ? 1 : 0.78)};
  transition: opacity var(--rapido), color var(--medio);

  &[aria-current='page'] {
    color: ${({ $solido }) => ($solido ? 'var(--azul)' : 'var(--branco)')};
  }

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
`

const Direita = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .loja {
    min-height: 44px;
    padding: 0 1.3rem;
    font-size: 1.05rem;
  }

  @media (max-width: 860px) {
    .loja {
      display: none;
    }
  }
`

const BotaoMenu = styled.button`
  display: none;
  position: relative;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 12px;
  background: ${({ $solido }) => ($solido ? 'var(--azul)' : 'rgba(255, 255, 255, 0.12)')};
  color: var(--branco);
  transition:
    background var(--medio),
    transform var(--rapido) var(--ease-out);

  span {
    position: absolute;
    left: 13px;
    height: 2.5px;
    border-radius: 2px;
    background: currentColor;
    transition: transform var(--medio) var(--ease-out);
  }
  span:nth-child(1) {
    top: 18px;
    width: 22px;
  }
  span:nth-child(2) {
    top: 27px;
    width: 14px;
  }

  &:active {
    transform: scale(0.94);
  }

  @media (max-width: 860px) {
    display: block;
  }
`

/* ---------- Menu mobile em tela cheia ---------- */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 150;
  display: flex;
  flex-direction: column;
  padding: 0 var(--gutter) calc(24px + env(safe-area-inset-bottom));
  background:
    radial-gradient(80% 50% at 100% 0%, rgba(47, 123, 255, 0.35), transparent 60%),
    var(--marinho);
  color: var(--branco);
  overflow-y: auto;
  clip-path: circle(0 at calc(100% - var(--gutter) - 24px) calc(var(--header-h) / 2));
  visibility: hidden;
  transition:
    clip-path 600ms var(--ease-out),
    visibility 0s linear 600ms;

  &[data-aberto='true'] {
    clip-path: circle(150% at calc(100% - var(--gutter) - 24px) calc(var(--header-h) / 2));
    visibility: visible;
    transition:
      clip-path 700ms var(--ease-out),
      visibility 0s;
  }

  /* faixa diagonal azul ao fundo */
  &::before {
    content: '';
    position: absolute;
    right: -30%;
    bottom: -10%;
    width: 80%;
    height: 70%;
    background: var(--azul);
    opacity: 0.35;
    transform: skewX(var(--inclinacao));
    pointer-events: none;
  }

  .topo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: var(--header-h);
  }

  .fechar {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.12);
  }

  ol {
    position: relative;
    display: grid;
    gap: 4px;
    margin: 4vh 0 auto;
    padding: 0;
    list-style: none;
    counter-reset: item;
  }

  li {
    opacity: 0;
    transform: translateX(-32px);
    transition:
      opacity 400ms var(--ease-out),
      transform 500ms var(--ease-out);
  }

  &[data-aberto='true'] li {
    opacity: 1;
    transform: none;
    transition-delay: calc(var(--i) * 70ms + 220ms);
  }

  ol a {
    display: flex;
    align-items: baseline;
    gap: 14px;
    padding: 6px 0;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 900;
    font-size: clamp(3rem, 15vw, 5rem);
    line-height: 1;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--branco);
  }

  ol a small {
    font-size: 1rem;
    font-weight: 700;
    color: var(--azul-claro);
    font-variant-numeric: tabular-nums;
  }

  ol a[aria-current='page'] span {
    color: transparent;
    -webkit-text-stroke: 2px var(--branco);
  }

  .rodape {
    position: relative;
    display: grid;
    gap: 20px;
    padding-top: 28px;
  }
`

const Header = () => {
  const { pathname } = useLocation()
  const [solido, setSolido] = useState(false)
  const [aberto, setAberto] = useState(false)
  const [hover, setHover] = useState(null)

  const progressoRef = useRef(null)
  const listaRef = useRef(null)
  const indicadorRef = useRef(null)
  const botaoMenuRef = useRef(null)
  const primeiroLinkRef = useRef(null)
  const abertoAntes = useRef(false)

  // Fundo de vidro + barra de progresso da leitura
  useEffect(() => {
    let quadro = 0
    const atualizar = () => {
      const y = window.scrollY
      setSolido(y > 24)
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (progressoRef.current) {
        progressoRef.current.style.transform = `scaleX(${total > 0 ? Math.min(y / total, 1) : 0})`
      }
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
  }, [pathname])

  // Pílula deslizante: vai até o link com hover, ou volta para o ativo
  const posicionar = useCallback(() => {
    const lista = listaRef.current
    const ind = indicadorRef.current
    if (!lista || !ind) return
    const alvoPath = hover ?? pathname
    const alvo = lista.querySelector(`[data-path="${alvoPath}"]`)
    if (!alvo) {
      ind.style.opacity = '0'
      return
    }
    const base = lista.getBoundingClientRect()
    const r = alvo.getBoundingClientRect()
    ind.style.width = `${r.width}px`
    ind.style.transform = `translate(${r.left - base.left}px, -50%)`
    ind.style.opacity = '1'
  }, [hover, pathname])

  useLayoutEffect(() => {
    posicionar()
  }, [posicionar])

  useEffect(() => {
    const lista = listaRef.current
    if (!lista) return undefined
    document.fonts?.ready.then(posicionar)
    window.addEventListener('resize', posicionar)
    const ro = 'ResizeObserver' in window ? new ResizeObserver(posicionar) : null
    lista.querySelectorAll('a').forEach((a) => ro?.observe(a))
    return () => {
      window.removeEventListener('resize', posicionar)
      ro?.disconnect()
    }
  }, [posicionar])

  // Menu mobile: trava a rolagem, Esc fecha, foco entra e volta
  useEffect(() => {
    if (aberto) {
      document.body.style.overflow = 'hidden'
      const t = setTimeout(() => primeiroLinkRef.current?.focus(), 250)
      const aoTeclar = (e) => e.key === 'Escape' && setAberto(false)
      window.addEventListener('keydown', aoTeclar)
      abertoAntes.current = true
      return () => {
        clearTimeout(t)
        document.body.style.overflow = ''
        window.removeEventListener('keydown', aoTeclar)
      }
    }
    if (abertoAntes.current) {
      abertoAntes.current = false
      botaoMenuRef.current?.focus()
    }
    return undefined
  }, [aberto])

  useEffect(() => {
    setAberto(false)
  }, [pathname])

  const fechar = () => setAberto(false)

  return (
    <>
      <Barra $solido={solido}>
        <Linha>
          <Marca />

          <Nav aria-label="Principal" onMouseLeave={() => setHover(null)}>
            <ul ref={listaRef}>
              <Indicador ref={indicadorRef} $solido={solido} aria-hidden="true" />
              {paginas.map((p) => {
                const ativo = p.to === pathname
                return (
                  <li key={p.to}>
                    <NavLink
                      to={p.to}
                      data-path={p.to}
                      aria-current={ativo ? 'page' : undefined}
                      $ativo={ativo}
                      $solido={solido}
                      onMouseEnter={() => setHover(p.to)}
                      onFocus={() => setHover(p.to)}
                      onBlur={() => setHover(null)}
                    >
                      {p.nome}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </Nav>

          <Direita>
            <Botao
              className="loja"
              href={LOJA}
              target="_blank"
              rel="noopener noreferrer"
              $variante={solido ? 'primario' : 'claro'}
            >
              <Icone nome="carrinho" tamanho={18} />
              Loja
            </Botao>
            <BotaoMenu
              ref={botaoMenuRef}
              type="button"
              $solido={solido}
              aria-label="Abrir menu"
              aria-expanded={aberto}
              aria-controls="menu-mobile"
              onClick={() => setAberto(true)}
            >
              <span />
              <span />
            </BotaoMenu>
          </Direita>
        </Linha>
        <Progresso ref={progressoRef} aria-hidden="true" />
      </Barra>

      {createPortal(
        <Overlay id="menu-mobile" data-aberto={aberto} role="dialog" aria-modal="true" aria-label="Menu">
          <div className="topo">
            <Marca onClick={fechar} />
            <button type="button" className="fechar" aria-label="Fechar menu" onClick={fechar}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <ol>
            {paginas.map((p, i) => (
              <li key={p.to} style={{ '--i': i }}>
                <Link
                  to={p.to}
                  ref={i === 0 ? primeiroLinkRef : undefined}
                  aria-current={p.to === pathname ? 'page' : undefined}
                  onClick={fechar}
                >
                  <small>0{i + 1}</small>
                  <span>{p.nome}</span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="rodape">
            <Botao href={LOJA} target="_blank" rel="noopener noreferrer" $variante="claro">
              <Icone nome="carrinho" tamanho={18} />
              Comprar na loja oficial
            </Botao>
            <Redes claro />
          </div>
        </Overlay>,
        document.body
      )}
    </>
  )
}

export default Header
