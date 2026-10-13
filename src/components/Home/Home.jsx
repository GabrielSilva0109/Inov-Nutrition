import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Produts from './Produts'
import {
  Acoes,
  AnelNutriente,
  Aneis,
  Botao,
  Chip,
  Chips,
  Container,
  Faixa,
  Kicker,
  Lead,
  LinhasVelocidade,
  Redes,
  Secao,
  TituloSecao,
} from '../UI/Base'
import Contador from '../UI/Contador'
import Icone from '../UI/Icone'
import { movimentoReduzido, useInclinacao } from '../UI/movimento'
import { LOJA, WHATSAPP, categorias, imagens } from '../../data/marca'

/* ==========================================================
   Herói
   ========================================================== */

const Hero = styled.section`
  --mx: 0;
  --my: 0;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 100dvh;
  display: grid;
  align-items: center;
  padding: calc(var(--header-h) + 32px) 0 calc(var(--corte) + 72px);
  background:
    radial-gradient(55% 70% at 75% 45%, rgba(47, 123, 255, 0.45), transparent 65%),
    radial-gradient(40% 50% at 0% 100%, rgba(11, 84, 166, 0.5), transparent 70%),
    var(--marinho);
  color: var(--branco);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--corte)), 0 100%);

  .redes {
    margin-top: 28px;
  }

  /* grade de quadra */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse at 65% 45%, #000 15%, transparent 72%);
    transform: translate(calc(var(--mx) * -10px), calc(var(--my) * -10px));
  }
`

const PalavraFundo = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  font-family: var(--fonte-display);
  font-style: italic;
  font-weight: 900;
  font-size: clamp(12rem, 38vw, 34rem);
  line-height: 0.8;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.07);
  transform: translate(calc(-50% + var(--mx) * 24px), calc(-50% + var(--my) * 16px));
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
`

const HeroGrade = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(24px, 4vw, 64px);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    text-align: left;
  }
`

const Selo = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--texto-claro);

  i {
    position: relative;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--azul-vivo);
  }
  i::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: inherit;
    animation: pulsar 1.8s var(--ease-out) infinite;
  }
`

const Titulo = styled.h1`
  margin-top: 1.4rem;
  font-size: clamp(4rem, 12.5vw, 10rem);
  font-style: italic;
  font-weight: 900;
  line-height: 0.84;
  text-transform: uppercase;

  .contorno {
    color: transparent;
    -webkit-text-stroke: 2px var(--branco);
  }
`

const Subtitulo = styled.p`
  margin-top: 1.6rem;
  font-family: var(--fonte-display);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.5rem, 2.8vw, 2.2rem);
  line-height: 1.15;
  text-transform: uppercase;
  color: var(--texto-claro);
`

const Rotativo = styled.span`
  position: relative;
  display: inline-grid;
  vertical-align: bottom;
  overflow: hidden;
  padding: 0 0.35em;
  margin-left: 0.1em;
  color: var(--branco);
  font-weight: 800;

  &::before {
    content: '';
    position: absolute;
    inset: 0.08em 0;
    z-index: -1;
    background: var(--azul);
    transform: skewX(var(--inclinacao));
    border-radius: 4px;
  }

  span {
    grid-area: 1 / 1;
    transition:
      transform 600ms var(--ease-out),
      opacity 400ms;
  }
  span[data-estado='antes'] {
    transform: translateY(100%);
    opacity: 0;
  }
  span[data-estado='depois'] {
    transform: translateY(-100%);
    opacity: 0;
  }
`

const palavras = ['Suplementação', 'Saúde', 'Bem estar']

const PalavraRotativa = () => {
  const [atual, setAtual] = useState(0)

  useEffect(() => {
    if (movimentoReduzido()) return undefined
    const t = setInterval(() => setAtual((n) => (n + 1) % palavras.length), 2400)
    return () => clearInterval(t)
  }, [])

  return (
    <Rotativo aria-hidden="true">
      {palavras.map((p, i) => (
        <span key={p} data-estado={i === atual ? 'agora' : i < atual ? 'depois' : 'antes'}>
          {p}
        </span>
      ))}
    </Rotativo>
  )
}

/* Palco: os produtos empilhados sobre a faixa diagonal da embalagem */

const Palco = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.02;
  width: min(100%, 560px);
  justify-self: center;

  @media (max-width: 900px) {
    width: min(100%, 420px);
    margin-top: 8px;
  }

  .faixa {
    position: absolute;
    left: 22%;
    top: -6%;
    width: 46%;
    height: 112%;
    background: linear-gradient(180deg, var(--azul-vivo), var(--azul) 60%, var(--azul-forte));
    transform: skewX(var(--inclinacao)) translateX(calc(var(--mx) * 10px));
    border-radius: 18px;
    box-shadow: 0 30px 80px -20px rgba(47, 123, 255, 0.6);
  }

  .faixa::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0 2px, transparent 2px 18px);
  }

  .anel {
    position: absolute;
    inset: 8%;
    border-radius: 50%;
    border: 2px dashed rgba(139, 188, 255, 0.35);
    animation: girar 40s linear infinite;
  }

  .camada {
    position: absolute;
    transform: translate(calc(var(--mx) * var(--forca) * 1px), calc(var(--my) * var(--forca) * 1px));
    transition: transform 300ms var(--ease-out);
  }

  .camada img {
    width: 100%;
    filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.45));
    animation: flutuar 6s ease-in-out infinite;
  }

  .tras-esq {
    --forca: 14;
    left: -12%;
    top: 26%;
    width: 62%;
  }
  .tras-esq img {
    animation-delay: -2s;
  }

  .tras-dir {
    --forca: 18;
    right: -14%;
    top: 30%;
    width: 60%;
  }
  .tras-dir img {
    animation-delay: -4s;
  }

  .frente {
    --forca: 26;
    left: 6%;
    top: -4%;
    width: 88%;
  }
`

const Etiqueta = styled.span`
  position: absolute;
  z-index: 2;
  display: grid;
  gap: 2px;
  padding: 10px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.95);
  color: var(--texto);
  box-shadow: var(--sombra-2);
  transform: translate(calc(var(--mx) * -20px), calc(var(--my) * -14px)) rotate(-4deg);
  transition: transform 300ms var(--ease-out);

  strong {
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 900;
    font-size: 1.9rem;
    line-height: 1;
    color: var(--azul);
  }

  small {
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--texto-2);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &.a {
    left: 0;
    top: 10%;
  }
  &.b {
    right: 0;
    bottom: 10%;
    transform: translate(calc(var(--mx) * -20px), calc(var(--my) * -14px)) rotate(3deg);
  }
`

const Rolar = styled.span`
  position: absolute;
  left: 50%;
  bottom: calc(var(--corte) + 20px);
  display: grid;
  justify-items: center;
  gap: 8px;
  transform: translateX(-50%);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--texto-claro);

  &::after {
    content: '';
    width: 2px;
    height: 40px;
    background: linear-gradient(var(--azul-claro), transparent);
    animation: descer 1.8s var(--ease-out) infinite;
    transform-origin: top;
  }

  @keyframes descer {
    0% {
      transform: scaleY(0);
    }
    50% {
      transform: scaleY(1);
      transform-origin: top;
    }
    51% {
      transform-origin: bottom;
    }
    100% {
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const Heroi = () => {
  const ref = useRef(null)

  // Paralaxe leve seguindo o ponteiro
  useEffect(() => {
    const el = ref.current
    if (!el || movimentoReduzido() || !window.matchMedia('(hover: hover)').matches) return undefined
    let quadro = 0
    const mover = (e) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2
      cancelAnimationFrame(quadro)
      quadro = requestAnimationFrame(() => {
        el.style.setProperty('--mx', x.toFixed(3))
        el.style.setProperty('--my', y.toFixed(3))
      })
    }
    el.addEventListener('pointermove', mover)
    return () => {
      cancelAnimationFrame(quadro)
      el.removeEventListener('pointermove', mover)
    }
  }, [])

  return (
    <Hero ref={ref}>
      <LinhasVelocidade />
      <PalavraFundo aria-hidden="true">INOV</PalavraFundo>

      <HeroGrade>
        <div data-reveal="up">
          <Selo>
            <i aria-hidden="true" />
            Suplementação esportiva de alta performance
          </Selo>
          <Titulo>
            <span className="mascara" style={{ '--l': 0 }}>
              <span>Inov</span>
            </span>
            <span className="mascara" style={{ '--l': 1 }}>
              <span className="contorno">Nutrition</span>
            </span>
          </Titulo>
          <Subtitulo>
            <span className="sr-only">Desenvolvendo o futuro da Suplementação, Saúde e Bem estar.</span>
            <span aria-hidden="true">Desenvolvendo o futuro da</span> <PalavraRotativa />
          </Subtitulo>
          <Acoes>
            <Botao as={Link} to="/produtos" $variante="claro">
              Ver produtos
              <Icone nome="seta" tamanho={20} traco={2.5} />
            </Botao>
            <Botao href={LOJA} target="_blank" rel="noopener noreferrer" $variante="contorno">
              <Icone nome="carrinho" tamanho={18} />
              Comprar online
            </Botao>
          </Acoes>
          <Redes claro className="redes" />
        </div>

        <Palco data-reveal="zoom" style={{ '--d': 2 }}>
          <span className="faixa" aria-hidden="true" />
          <span className="anel" aria-hidden="true" />
          <div className="camada tras-esq">
            <img src={imagens.creatina300} alt="Creatina 100% Pure Inov Nutrition" />
          </div>
          <div className="camada tras-dir">
            <img src={imagens.grenade} alt="Pré-treino Grenade Inov Nutrition" />
          </div>
          <div className="camada frente">
            <img src={imagens.wheyCho} alt="3Whey Inov Nutrition sabor chocolate" />
          </div>
          <Etiqueta className="a">
            <strong>22g</strong>
            <small>de proteína</small>
          </Etiqueta>
          <Etiqueta className="b">
            <strong>100%</strong>
            <small>creatina pura</small>
          </Etiqueta>
        </Palco>
      </HeroGrade>

      <Rolar aria-hidden="true">Role</Rolar>
    </Hero>
  )
}

/* ==========================================================
   Faixas cruzadas
   ========================================================== */

const Cruzamento = styled.div`
  position: relative;
  z-index: 3;
  margin-top: calc(var(--corte) * -0.6);
  padding-block: 12px 28px;
  overflow: hidden;

  > div + div {
    margin-top: -40px;
  }
`

const lemas = ['Força', 'Energia', 'Foco', 'Performance', 'Recuperação', 'Resultado']

/* ==========================================================
   Placar
   ========================================================== */

const Placar = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding-block: calc(var(--corte) + 64px);
  background: var(--azul);
  color: var(--branco);
  clip-path: polygon(0 var(--corte), 100% 0, 100% calc(100% - var(--corte)), 0 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      repeating-linear-gradient(-78deg, rgba(255, 255, 255, 0.05) 0 2px, transparent 2px 42px),
      radial-gradient(60% 80% at 100% 50%, rgba(47, 123, 255, 0.6), transparent 70%);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    margin: 40px 0 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding: 8px 0 8px 24px;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    bottom: 10px;
    width: 6px;
    background: rgba(255, 255, 255, 0.35);
    transform: skewX(var(--inclinacao));
  }

  .numero {
    display: flex;
    align-items: baseline;
    gap: 4px;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 900;
    font-size: clamp(3.6rem, 7vw, 6rem);
    line-height: 0.9;
    font-variant-numeric: tabular-nums;
  }

  .numero small {
    font-size: 0.45em;
    color: var(--azul-claro);
  }

  p {
    margin-top: 10px;
    max-width: 22ch;
    color: #dbe8fb;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    ul {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 36px;
    }
  }
`

const numeros = [
  { valor: 22, unidade: 'g', texto: 'de proteína por dose do 3Whey' },
  { valor: 3, unidade: '', texto: 'filtragens de whey: concentrado, isolado e hidrolisado' },
  { valor: 100, unidade: '%', texto: 'creatina pura, zero carboidratos' },
  { valor: 6, unidade: '', texto: 'categorias para cada objetivo' },
]

/* ==========================================================
   Destaque 3Whey
   ========================================================== */

const DestaqueGrade = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(40px, 6vw, 96px);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const Vitrine = styled.div`
  --rx: 0deg;
  --ry: 0deg;
  --px: 50%;
  --py: 50%;
  position: relative;
  isolation: isolate;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: var(--raio-lg);
  background:
    radial-gradient(circle at var(--px) var(--py), rgba(255, 255, 255, 0.9), transparent 45%),
    linear-gradient(160deg, var(--azul-50), var(--azul-100));
  perspective: 900px;
  overflow: hidden;

  .nome-fundo {
    position: absolute;
    inset: auto 0 6% 0;
    z-index: -1;
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 900;
    font-size: clamp(5rem, 16vw, 12rem);
    line-height: 0.8;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    color: transparent;
    -webkit-text-stroke: 2px rgba(11, 84, 166, 0.16);
  }

  .faixa {
    position: absolute;
    left: 30%;
    top: -10%;
    width: 34%;
    height: 120%;
    z-index: -1;
    background: var(--azul);
    transform: skewX(var(--inclinacao));
    opacity: 0.95;
  }

  img {
    width: 94%;
    transform: rotateX(var(--rx)) rotateY(var(--ry)) translateZ(40px);
    transition: transform 400ms var(--ease-out);
    filter: drop-shadow(0 30px 30px rgba(4, 19, 43, 0.35));
  }
`

const Destaque = () => {
  const vitrineRef = useInclinacao(14)
  const whey = categorias[0].produtos[0]

  return (
    <Secao>
      <DestaqueGrade>
        <Vitrine ref={vitrineRef} data-reveal="left">
          <span className="faixa" aria-hidden="true" />
          <span className="nome-fundo" aria-hidden="true">
            3Whey
          </span>
          <img src={whey.imagem} alt="3Whey Inov Nutrition" />
        </Vitrine>

        <div>
          <div data-reveal="up">
            <Kicker>Em destaque</Kicker>
            <TituloSecao>
              3Whey: <em>três</em> wheys em <span className="contorno">uma dose</span>
            </TituloSecao>
            <Lead>{whey.descricao[0]}</Lead>
          </div>

          <Aneis style={{ marginTop: 36 }}>
            {whey.nutrientes.map((n, i) => (
              <AnelNutriente key={n.name} nome={n.name} quantidade={n.amount} percentual={n.percentage} indice={i} />
            ))}
          </Aneis>

          <div data-reveal="up" style={{ marginTop: 32 }}>
            <Chips aria-label="Sabores">
              {whey.opcoes.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </Chips>
            <Acoes>
              <Botao as={Link} to="/produtos?categoria=Proteina">
                Ver ficha completa
                <Icone nome="seta" tamanho={20} traco={2.5} />
              </Botao>
              <Botao href={LOJA} target="_blank" rel="noopener noreferrer" $variante="contornoEscuro">
                <Icone nome="carrinho" tamanho={18} />
                Comprar
              </Botao>
            </Acoes>
          </div>
        </div>
      </DestaqueGrade>
    </Secao>
  )
}

/* ==========================================================
   Chamada final
   ========================================================== */

const Chamada = styled.section`
  position: relative;
  z-index: 1;
  padding: 0 0 calc(var(--corte) + 72px);
  background: var(--fundo);
`

const ChamadaCaixa = styled(Container)`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
  align-items: center;
  gap: 32px;
  padding: clamp(36px, 6vw, 72px);
  border-radius: var(--raio-lg);
  background: linear-gradient(120deg, var(--azul-forte), var(--azul) 55%, var(--azul-vivo));
  color: var(--branco);
  box-shadow: var(--sombra-azul);

  &::before {
    content: '';
    position: absolute;
    right: -10%;
    top: -40%;
    width: 50%;
    height: 180%;
    z-index: -1;
    background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0 14px, transparent 14px 32px);
    transform: skewX(var(--inclinacao));
  }

  img {
    width: 100%;
    max-width: 260px;
    justify-self: center;
    filter: drop-shadow(0 24px 30px rgba(0, 0, 0, 0.35));
    animation: flutuar 5s ease-in-out infinite;
  }

  @media (max-width: 760px) {
    grid-template-columns: minmax(0, 1fr);
    img {
      max-width: 180px;
      grid-row: 1;
    }
  }
`

const ChamadaFinal = () => (
  <Chamada>
    <ChamadaCaixa data-reveal="zoom">
      <div>
        <Kicker $claro style={{ color: 'var(--branco)' }}>
          Bora treinar
        </Kicker>
        <TituloSecao $claro>
          Pronto pra <span className="contorno">subir</span> de nível?
        </TituloSecao>
        <Lead $claro style={{ color: '#e1ecfc' }}>
          Fale com o nosso time no WhatsApp ou garanta seus suplementos direto na loja oficial.
        </Lead>
        <Acoes>
          <Botao href={WHATSAPP} target="_blank" rel="noopener noreferrer" $variante="claro">
            <Icone nome="whatsapp" tamanho={20} />
            Chamar no WhatsApp
          </Botao>
          <Botao href={LOJA} target="_blank" rel="noopener noreferrer" $variante="contorno">
            Ir para a loja
            <Icone nome="setaDiagonal" tamanho={20} traco={2.5} />
          </Botao>
        </Acoes>
      </div>
      <img src={imagens.ripped120} alt="" />
    </ChamadaCaixa>
  </Chamada>
)

/* ==========================================================
   Página
   ========================================================== */

const Home = () => {
  return (
    <>
      <Heroi />

      <Cruzamento>
        <Faixa itens={lemas} tom="azul" inclinacao={-3} />
        <Faixa itens={lemas} tom="claro" inclinacao={2} reverso velocidade={38} />
      </Cruzamento>

      <Produts />

      <Placar>
        <Container>
          <div data-reveal="up">
            <Kicker $claro style={{ color: 'var(--branco)' }}>
              Placar Inov
            </Kicker>
            <TituloSecao $claro>
              Números que <span className="contorno">jogam</span> a seu favor
            </TituloSecao>
          </div>
          <ul>
            {numeros.map((n, i) => (
              <li key={n.texto} data-reveal="up" style={{ '--d': i }}>
                <span className="numero">
                  <Contador valor={n.valor} />
                  {n.unidade && <small>{n.unidade}</small>}
                </span>
                <p>{n.texto}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Placar>

      <Destaque />
      <ChamadaFinal />
    </>
  )
}

export default Home
