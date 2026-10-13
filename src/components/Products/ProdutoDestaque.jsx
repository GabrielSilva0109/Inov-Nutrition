import React from 'react'
import styled from 'styled-components'
import { Acoes, AnelNutriente, Aneis, Botao, Chip, Chips, Container, Kicker } from '../UI/Base'
import Icone from '../UI/Icone'
import { useInclinacao } from '../UI/movimento'
import { Vitrine } from '../Home/Home'
import { LOJA, WHATSAPP } from '../../data/marca'

const Bloco = styled.section`
  overflow-x: clip;
  padding-block: clamp(56px, 8vw, 112px);
  background: ${({ $suave }) => ($suave ? 'var(--fundo-2)' : 'var(--fundo)')};

  &:first-child {
    padding-top: clamp(64px, 9vw, 120px);
  }
`

const Grade = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(36px, 6vw, 96px);
  align-items: center;

  ${({ $invertido }) =>
    $invertido &&
    `
    > :first-child { order: 2; }
  `}

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    > :first-child {
      order: 0;
    }
  }
`

const Nome = styled.h2`
  margin-top: 0.9rem;
  font-size: clamp(3rem, 7vw, 6rem);
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.88;
  overflow-wrap: anywhere;

  &.longo {
    font-size: clamp(2.4rem, 4.8vw, 4rem);
  }
`

const Texto = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 1.4rem;
  max-width: 60ch;
  color: var(--texto-2);
  font-size: 1.08rem;
`

const Novidade = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 1.4rem;
  padding: 10px 16px;
  border-radius: 12px;
  background: var(--azul);
  color: var(--branco);
  font-weight: 700;
  box-shadow: var(--sombra-azul);

  svg {
    flex: none;
  }
`

const Opcoes = styled.div`
  margin-top: 1.8rem;

  h3 {
    margin-bottom: 12px;
    font-size: 1rem;
    font-style: italic;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--texto-3);
  }
`

const Ficha = styled(Container)`
  margin-top: clamp(48px, 6vw, 80px);
  padding: clamp(24px, 4vw, 44px);
  border-radius: var(--raio-lg);
  background: var(--branco);
  border: 1px solid var(--borda);
  box-shadow: var(--sombra-1);

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px 24px;
    margin-bottom: 32px;
  }

  h3 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-style: italic;
    font-weight: 900;
    text-transform: uppercase;
  }

  header p {
    color: var(--texto-3);
    font-size: 0.95rem;
  }
`

const Composicao = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 12px;
    background: var(--azul-50);
    border: 1px solid var(--azul-100);
    transition:
      transform var(--rapido) var(--ease-out),
      background var(--medio),
      color var(--medio);
  }

  strong {
    font-weight: 700;
  }

  span {
    font-family: var(--fonte-display);
    font-style: italic;
    font-weight: 800;
    font-size: 1.2rem;
    color: var(--azul);
    font-variant-numeric: tabular-nums;
    transition: color var(--medio);
  }

  @media (hover: hover) {
    li:hover {
      transform: translateY(-3px);
      background: var(--azul);
      color: var(--branco);
    }
    li:hover span {
      color: var(--branco);
    }
  }
`

const ProdutoDestaque = ({ produto, categoria, indice }) => {
  const vitrineRef = useInclinacao(14)
  const invertido = indice % 2 === 1
  const nomeFundo = produto.nomeCurto ?? produto.nome

  return (
    <Bloco $suave={invertido}>
      <Grade $invertido={invertido}>
        <div>
          <div data-reveal="up">
            <Kicker>
              {categoria} · 0{indice + 1}
            </Kicker>
            <Nome className={produto.nome.length > 18 ? 'longo' : undefined}>{produto.nome}</Nome>
            <Texto>
              {produto.descricao.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Texto>
            {produto.destaque && (
              <Novidade>
                <Icone nome="raio" tamanho={20} />
                {produto.destaque}
              </Novidade>
            )}
          </div>

          <Opcoes data-reveal="up" style={{ '--d': 1 }}>
            <h3>{produto.rotuloOpcoes}</h3>
            <Chips>
              {produto.opcoes.map((o) => (
                <Chip key={o}>{o}</Chip>
              ))}
            </Chips>
          </Opcoes>

          <Acoes data-reveal="up" style={{ '--d': 2 }}>
            <Botao href={LOJA} target="_blank" rel="noopener noreferrer">
              <Icone nome="carrinho" tamanho={18} />
              Comprar agora
            </Botao>
            <Botao href={WHATSAPP} target="_blank" rel="noopener noreferrer" $variante="contornoEscuro">
              Tirar dúvidas
              <Icone nome="seta" tamanho={20} traco={2.5} />
            </Botao>
          </Acoes>
        </div>

        <Vitrine ref={vitrineRef} data-reveal={invertido ? 'left' : 'right'}>
          <span className="faixa" aria-hidden="true" />
          <span className="nome-fundo" aria-hidden="true">
            {nomeFundo.split(' ')[0]}
          </span>
          <img src={produto.imagem} alt={`${produto.nome} Inov Nutrition`} />
        </Vitrine>
      </Grade>

      {produto.nutrientes && (
        <Ficha as="div">
          <header data-reveal="up">
            <h3>Composição</h3>
            <p>Quantidade por porção</p>
          </header>
          <Aneis>
            {produto.nutrientes.map((n, i) => (
              <AnelNutriente key={n.name} nome={n.name} quantidade={n.amount} percentual={n.percentage} indice={i} />
            ))}
          </Aneis>
        </Ficha>
      )}

      {produto.composicao && (
        <Ficha as="div">
          <header data-reveal="up">
            <h3>Composição</h3>
            <p>Quantidade por porção</p>
          </header>
          <Composicao>
            {produto.composicao.map((n, i) => (
              <li key={n.name} data-reveal="up" style={{ '--d': i }}>
                <strong>{n.name}</strong>
                <span>{n.amount}</span>
              </li>
            ))}
          </Composicao>
        </Ficha>
      )}
    </Bloco>
  )
}

export default ProdutoDestaque
