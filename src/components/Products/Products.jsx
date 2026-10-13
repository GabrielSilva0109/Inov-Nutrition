import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import { PageHero } from '../UI/Base'
import Icone from '../UI/Icone'
import ProdutoDestaque from './ProdutoDestaque'
import { categorias, imagens } from '../../data/marca'

const Abas = styled.div`
  position: sticky;
  top: calc(var(--header-h) + 10px);
  z-index: 20;
  margin-top: calc(var(--corte) * -1 - 8px);
  padding-inline: var(--gutter);
`

const Trilho = styled.div`
  position: relative;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;
  padding: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 0 0 1px var(--borda), var(--sombra-2);
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Lista = styled.div`
  position: relative;
  display: flex;
  gap: 2px;
  width: max-content;
`

const Pilula = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  height: 100%;
  border-radius: 999px;
  background: var(--azul);
  box-shadow: 0 0 0 1px rgba(11, 84, 166, 0.25), 0 6px 18px -4px rgba(11, 84, 166, 0.55);
  transition:
    transform 460ms var(--ease-out),
    width 460ms var(--ease-out);
`

const Aba = styled.button`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  font-family: var(--fonte-display);
  font-style: italic;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--texto-2);
  transition: color var(--medio);
  -webkit-tap-highlight-color: transparent;

  &[aria-selected='true'] {
    color: var(--branco);
  }

  @media (hover: hover) {
    &:not([aria-selected='true']):hover {
      color: var(--azul);
    }
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px var(--azul-vivo);
    border-radius: 999px;
  }
`

const Painel = styled.div`
  animation: entrarPainel 520ms var(--ease-out) backwards;

  @keyframes entrarPainel {
    from {
      opacity: 0;
      transform: translateX(${({ $direcao }) => $direcao * 48}px);
    }
  }
`

const Products = () => {
  const [params, setParams] = useSearchParams()
  const pedida = params.get('categoria')
  const [activeCategory, setActiveCategory] = useState(
    categorias.some((c) => c.id === pedida) ? pedida : 'Proteina'
  )
  const [direcao, setDirecao] = useState(1)

  const listaRef = useRef(null)
  const pilulaRef = useRef(null)
  const trilhoRef = useRef(null)
  const ancoraRef = useRef(null)

  const indice = (id) => categorias.findIndex((c) => c.id === id)
  const categoria = categorias[indice(activeCategory)]

  const handleCategoryClick = (id, focar = false) => {
    if (id === activeCategory) return
    setDirecao(indice(id) > indice(activeCategory) ? 1 : -1)
    setActiveCategory(id)
    setParams({ categoria: id }, { replace: true })
    if (focar) listaRef.current?.querySelector(`#aba-${id}`)?.focus()

    // se já rolou para dentro dos produtos, volta ao começo do painel novo
    const ancora = ancoraRef.current
    if (ancora) {
      const topo = ancora.getBoundingClientRect().top + window.scrollY - 160
      if (window.scrollY > topo) window.scrollTo({ top: topo, behavior: 'smooth' })
    }
  }

  // Setas, Home e End movem entre as abas
  const aoTeclar = (e) => {
    const i = indice(activeCategory)
    const mapa = {
      ArrowRight: (i + 1) % categorias.length,
      ArrowLeft: (i - 1 + categorias.length) % categorias.length,
      Home: 0,
      End: categorias.length - 1,
    }
    if (e.key in mapa) {
      e.preventDefault()
      handleCategoryClick(categorias[mapa[e.key]].id, true)
    }
  }

  const posicionar = useCallback(() => {
    const lista = listaRef.current
    const pilula = pilulaRef.current
    const alvo = lista?.querySelector('[aria-selected="true"]')
    if (!alvo || !pilula) return
    const base = lista.getBoundingClientRect()
    const r = alvo.getBoundingClientRect()
    pilula.style.width = `${r.width}px`
    pilula.style.transform = `translate(${r.left - base.left}px, -50%)`

    // no celular, mantém a aba ativa visível no trilho
    const trilho = trilhoRef.current
    if (trilho && trilho.scrollWidth > trilho.clientWidth) {
      const centro = alvo.offsetLeft - trilho.clientWidth / 2 + r.width / 2
      trilho.scrollTo({ left: centro, behavior: 'smooth' })
    }
  }, [])

  useLayoutEffect(() => {
    posicionar()
  }, [activeCategory, posicionar])

  useEffect(() => {
    document.fonts?.ready.then(posicionar)
    window.addEventListener('resize', posicionar)
    const ro = 'ResizeObserver' in window ? new ResizeObserver(posicionar) : null
    listaRef.current?.querySelectorAll('button').forEach((b) => ro?.observe(b))
    return () => {
      window.removeEventListener('resize', posicionar)
      ro?.disconnect()
    }
  }, [posicionar])

  return (
    <>
      <PageHero
        kicker="Produtos"
        linhas={['Linha', <span className="contorno">Inov</span>]}
        texto="Fórmulas para cada objetivo: ganho de massa, força, energia, definição e saúde. Escolha a categoria e confira a ficha de cada produto."
        palavraFundo="Performance"
        aside={
          <img
            src={imagens.omega120}
            alt=""
            style={{
              width: 'min(100%, 400px)',
              marginInline: 'auto',
              filter: 'drop-shadow(0 30px 40px rgba(0,0,0,.45))',
              animation: 'flutuar 6s ease-in-out infinite',
            }}
          />
        }
      />

      <Abas>
        <Trilho ref={trilhoRef}>
          <Lista ref={listaRef} role="tablist" aria-label="Categorias de produtos" onKeyDown={aoTeclar}>
            <Pilula ref={pilulaRef} aria-hidden="true" />
            {categorias.map((c) => {
              const ativa = c.id === activeCategory
              return (
                <Aba
                  key={c.id}
                  id={`aba-${c.id}`}
                  type="button"
                  role="tab"
                  aria-selected={ativa}
                  aria-controls="painel-produtos"
                  tabIndex={ativa ? 0 : -1}
                  onClick={() => handleCategoryClick(c.id)}
                >
                  <Icone nome={c.icone} tamanho={18} />
                  {c.nome}
                </Aba>
              )
            })}
          </Lista>
        </Trilho>
      </Abas>

      <div ref={ancoraRef} aria-hidden="true" />
      <Painel
        key={activeCategory}
        id="painel-produtos"
        role="tabpanel"
        aria-labelledby={`aba-${activeCategory}`}
        $direcao={direcao}
      >
        {categoria.produtos.map((produto, i) => (
          <ProdutoDestaque key={`${produto.nome}-${i}`} produto={produto} categoria={categoria.nome} indice={i} />
        ))}
      </Painel>
    </>
  )
}

export default Products
