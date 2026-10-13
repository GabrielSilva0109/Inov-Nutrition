import React from 'react'
import styled, { css } from 'styled-components'
import Icone from './Icone'
import Contador from './Contador'
import { redes } from '../../data/marca'

/* ---------- Estrutura ---------- */

export const Container = styled.div`
  width: min(100% - 2 * var(--gutter), var(--largura));
  margin-inline: auto;
`

export const Secao = styled.section`
  position: relative;
  overflow-x: clip;
  padding-block: clamp(72px, 10vw, 140px);
  background: ${({ $tom }) => ($tom === 'suave' ? 'var(--fundo-2)' : 'var(--fundo)')};
`

/* ---------- Tipografia ---------- */

export const Kicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--fonte-display);
  font-style: italic;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ $claro }) => ($claro ? 'var(--azul-claro)' : 'var(--azul)')};

  &::before {
    content: '';
    width: 26px;
    height: 8px;
    background: currentColor;
    transform: skewX(var(--inclinacao));
    border-radius: 2px;
  }
`

export const TituloSecao = styled.h2`
  margin-top: 0.9rem;
  font-size: clamp(2.6rem, 6.4vw, 5.2rem);
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
  --tinta: ${({ $claro }) => ($claro ? 'var(--branco)' : 'var(--texto)')};
  color: var(--tinta);

  em {
    font-style: inherit;
    color: ${({ $claro }) => ($claro ? 'var(--azul-claro)' : 'var(--azul)')};
  }

  .contorno {
    color: transparent;
    -webkit-text-stroke: 2px var(--tinta);
  }
`

export const Lead = styled.p`
  margin-top: 1.25rem;
  max-width: 58ch;
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  line-height: 1.65;
  color: ${({ $claro }) => ($claro ? 'var(--texto-claro)' : 'var(--texto-2)')};
`

/* ---------- Botão em paralelogramo (o corte da embalagem) ---------- */

const variantes = {
  primario: css`
    --bg: var(--azul);
    --cor: var(--branco);
    --bg-hover: var(--azul-forte);
  `,
  claro: css`
    --bg: var(--branco);
    --cor: var(--azul);
    --bg-hover: var(--azul-100);
  `,
  contorno: css`
    --bg: transparent;
    --cor: var(--branco);
    --linha: rgba(255, 255, 255, 0.7);
    --bg-hover: rgba(255, 255, 255, 0.12);
  `,
  contornoEscuro: css`
    --bg: transparent;
    --cor: var(--azul);
    --linha: var(--azul);
    --bg-hover: var(--azul-50);
  `,
}

export const Botao = styled.a`
  --linha: transparent;
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  min-height: 54px;
  padding: 0 1.8rem;
  border: 0;
  background: none;
  font-family: var(--fonte-display);
  font-style: italic;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  color: var(--cor);
  -webkit-tap-highlight-color: transparent;
  transition: transform var(--rapido) var(--ease-out);
  ${({ $variante = 'primario' }) => variantes[$variante]}

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 8px;
    transform: skewX(var(--inclinacao));
  }

  &::before {
    background: var(--bg);
    border: 2px solid var(--linha);
    transition:
      background var(--medio),
      box-shadow var(--medio) var(--ease-out);
  }

  /* brilho que atravessa o botão no hover */
  &::after {
    background: linear-gradient(105deg, transparent 38%, rgba(255, 255, 255, 0.45) 50%, transparent 62%) no-repeat;
    background-size: 250% 100%;
    background-position: 130% 0;
    transition: background-position 0.75s var(--ease-out);
  }

  svg {
    transition: transform var(--medio) var(--ease-out);
  }

  @media (hover: hover) {
    &:hover::before {
      background: var(--bg-hover);
      box-shadow: ${({ $variante = 'primario' }) =>
        $variante === 'primario' ? 'var(--sombra-azul)' : 'none'};
    }
    &:hover::after {
      background-position: -30% 0;
    }
    &:hover svg {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    box-shadow: none;
  }
  &:focus-visible::before {
    box-shadow: var(--anel);
  }

  @media (max-width: 420px) {
    padding: 0 1.3rem;
    font-size: 1.05rem;
  }
`

export const Acoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 18px;
  margin-top: 2.25rem;

  @media (max-width: 480px) {
    ${Botao} {
      flex: 1 1 100%;
    }
  }
`

/* ---------- Chips ---------- */

export const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Chip = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 999px;
  background: var(--azul-50);
  border: 1px solid var(--azul-100);
  color: var(--azul-forte);
  font-weight: 600;
  font-size: 0.95rem;
  transition:
    transform var(--rapido) var(--ease-out),
    background var(--medio),
    color var(--medio);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      background: var(--azul);
      border-color: var(--azul);
      color: var(--branco);
    }
  }
`

/* ---------- Redes sociais ---------- */

const RedesLista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const RedeLink = styled.a`
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  color: ${({ $claro }) => ($claro ? 'var(--branco)' : 'var(--azul)')};
  background: ${({ $claro }) => ($claro ? 'rgba(255, 255, 255, 0.08)' : 'var(--azul-50)')};
  border: 1px solid ${({ $claro }) => ($claro ? 'rgba(255, 255, 255, 0.16)' : 'var(--azul-100)')};
  transition:
    transform var(--medio) var(--ease-pop),
    background var(--medio),
    color var(--medio),
    border-color var(--medio);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px) rotate(-6deg);
      background: ${({ $claro }) => ($claro ? 'var(--branco)' : 'var(--azul)')};
      border-color: transparent;
      color: ${({ $claro }) => ($claro ? 'var(--azul)' : 'var(--branco)')};
    }
  }

  &:active {
    transform: scale(0.94);
  }
`

export const Redes = ({ claro, className }) => (
  <RedesLista className={className}>
    {redes.map((r) => (
      <li key={r.id}>
        <RedeLink
          href={r.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={r.nome}
          title={r.nome}
          $claro={claro}
        >
          <Icone nome={r.icone} tamanho={20} />
        </RedeLink>
      </li>
    ))}
  </RedesLista>
)

/* ---------- Linhas de velocidade (fundo dos heróis) ---------- */

const linhas = [
  { t: 12, w: 180, d: 0, v: 2.6 },
  { t: 24, w: 320, d: 1.4, v: 3.4 },
  { t: 37, w: 140, d: 0.6, v: 2.2 },
  { t: 49, w: 260, d: 2.2, v: 3 },
  { t: 61, w: 200, d: 0.2, v: 2.8 },
  { t: 72, w: 380, d: 1.8, v: 3.8 },
  { t: 84, w: 160, d: 1, v: 2.4 },
  { t: 92, w: 240, d: 2.8, v: 3.2 },
]

const LinhasWrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  transform: skewY(-8deg);

  span {
    position: absolute;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(139, 188, 255, 0.55), transparent);
    animation: velocidade linear infinite;
  }
`

export const LinhasVelocidade = () => (
  <LinhasWrap aria-hidden="true">
    {linhas.map((l, i) => (
      <span
        key={i}
        style={{ top: `${l.t}%`, width: l.w, animationDuration: `${l.v}s`, animationDelay: `${l.d}s` }}
      />
    ))}
  </LinhasWrap>
)

/* ---------- Faixa corrida (marquee) ---------- */

const FaixaTrilho = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding-block: 18px;
  margin-inline: -4vw;
  transform: rotate(${({ $inclinacao }) => $inclinacao}deg);
  --tinta: ${({ $tom }) => ($tom === 'claro' ? 'var(--azul)' : 'var(--branco)')};
  background: ${({ $tom }) => ($tom === 'claro' ? 'var(--branco)' : 'var(--azul)')};
  color: var(--tinta);
  box-shadow: ${({ $tom }) => ($tom === 'claro' ? 'var(--sombra-2)' : 'var(--sombra-azul)')};

  @media (hover: hover) {
    &:hover > div {
      animation-play-state: paused;
    }
  }
`

const FaixaConteudo = styled.div`
  display: flex;
  width: max-content;
  animation: deslizarFaixa ${({ $velocidade }) => $velocidade}s linear infinite;
  animation-direction: ${({ $reverso }) => ($reverso ? 'reverse' : 'normal')};

  span {
    display: inline-flex;
    align-items: center;
    gap: 28px;
    padding-right: 28px;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 900;
    font-size: clamp(1.6rem, 3.4vw, 2.6rem);
    line-height: 1;
    text-transform: uppercase;
    white-space: nowrap;
  }

  span:nth-child(even) {
    color: transparent;
    -webkit-text-stroke: 1.5px var(--tinta);
  }

  i {
    width: 14px;
    height: 14px;
    background: var(--tinta);
    transform: skewX(var(--inclinacao));
  }
`

export const Faixa = ({ itens, tom = 'azul', inclinacao = -2.5, reverso = false, velocidade = 32, className }) => {
  const serie = [...itens, ...itens]
  return (
    <FaixaTrilho $tom={tom} $inclinacao={inclinacao} aria-hidden="true" className={className}>
      <FaixaConteudo $reverso={reverso} $velocidade={velocidade}>
        {[...serie, ...serie].map((item, i) => (
          <span key={i}>
            {item}
            <i />
          </span>
        ))}
      </FaixaConteudo>
    </FaixaTrilho>
  )
}

/* ---------- Herói das páginas internas ---------- */

const HeroWrap = styled.section`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding-top: calc(var(--header-h) + clamp(40px, 7vw, 96px));
  padding-bottom: calc(var(--corte) + clamp(48px, 7vw, 96px));
  background:
    radial-gradient(60% 80% at 85% 20%, rgba(47, 123, 255, 0.35), transparent 60%),
    radial-gradient(50% 60% at 0% 100%, rgba(11, 84, 166, 0.45), transparent 70%),
    var(--marinho);
  color: var(--branco);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--corte)), 0 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse at 60% 40%, #000 20%, transparent 75%);
  }
`

const HeroGrade = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

const HeroTitulo = styled.h1`
  margin-top: 1rem;
  font-size: clamp(2.7rem, 6vw, 5.6rem);
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.9;

  .contorno {
    color: transparent;
    -webkit-text-stroke: 2px var(--branco);
  }
  em {
    font-style: inherit;
    color: var(--azul-claro);
  }
`

const FundoPalavra = styled.span`
  position: absolute;
  right: -2vw;
  bottom: calc(var(--corte) + 8px);
  z-index: -1;
  font-family: var(--fonte-display);
  font-style: italic;
  font-weight: 900;
  font-size: clamp(7rem, 22vw, 20rem);
  line-height: 0.8;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.09);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`

export const PageHero = ({ kicker, linhas, texto, aside, palavraFundo, children }) => (
  <HeroWrap>
    <LinhasVelocidade />
    {palavraFundo && <FundoPalavra aria-hidden="true">{palavraFundo}</FundoPalavra>}
    <HeroGrade>
      <div data-reveal="up">
        <Kicker $claro>{kicker}</Kicker>
        <HeroTitulo>
          {linhas.map((l, i) => (
            <span className="mascara" key={i} style={{ '--l': i }}>
              <span>{l}</span>
            </span>
          ))}
        </HeroTitulo>
        {texto && <Lead $claro>{texto}</Lead>}
        {children}
      </div>
      {aside && <div data-reveal="zoom" style={{ '--d': 2 }}>{aside}</div>}
    </HeroGrade>
  </HeroWrap>
)

/* ---------- Anel de nutriente ---------- */

const RAIO = 42
const CIRCUNF = 2 * Math.PI * RAIO

const AnelItem = styled.li`
  display: grid;
  justify-items: center;
  gap: 10px;
  text-align: center;
  min-width: 0;

  .anel {
    position: relative;
    width: clamp(92px, 11vw, 116px);
    aspect-ratio: 1;
    transition: transform var(--medio) var(--ease-pop);
  }

  svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .trilho {
    stroke: var(--azul-100);
  }

  .progresso {
    stroke: var(--azul);
    stroke-dasharray: ${CIRCUNF}px;
    stroke-dashoffset: ${CIRCUNF}px;
    transition: stroke-dashoffset 1.6s var(--ease-out);
    transition-delay: calc(min(var(--d, 0), 10) * 90ms + 200ms);
  }

  &[data-visivel] .progresso {
    stroke-dashoffset: var(--alvo);
  }

  .valor {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 800;
    font-size: 1.65rem;
    color: var(--texto);
    font-variant-numeric: tabular-nums;
  }

  .nome {
    font-weight: 700;
    color: var(--texto);
    line-height: 1.2;
    overflow-wrap: anywhere;
  }

  .qtd {
    margin-top: -8px;
    font-size: 0.9rem;
    color: var(--texto-3);
    font-variant-numeric: tabular-nums;
  }

  @media (hover: hover) {
    &:hover .anel {
      transform: scale(1.06) rotate(-4deg);
    }
  }
`

export const AnelNutriente = ({ nome, quantidade, percentual, indice = 0 }) => {
  // percentuais muito pequenos ainda mostram um traço visível
  const p = percentual > 0 ? Math.max(Math.min(percentual, 100), 1.5) : 0
  return (
    <AnelItem data-reveal="up" style={{ '--d': indice, '--alvo': `${CIRCUNF * (1 - p / 100)}px` }}>
      <div className="anel">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle className="trilho" cx="50" cy="50" r={RAIO} fill="none" strokeWidth="8" />
          <circle className="progresso" cx="50" cy="50" r={RAIO} fill="none" strokeWidth="8" strokeLinecap={p > 0 ? 'round' : 'butt'} />
        </svg>
        <span className="valor">
          <span>
            <Contador valor={percentual} />%
          </span>
        </span>
      </div>
      <span className="nome">{nome}</span>
      <span className="qtd">{quantidade}</span>
    </AnelItem>
  )
}

export const Aneis = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 128px), 1fr));
  gap: 32px 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
