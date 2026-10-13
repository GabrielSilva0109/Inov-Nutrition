import React from 'react'
import { Link } from 'react-router-dom'
import { Acoes, Botao, PageHero } from '../UI/Base'
import Icone from '../UI/Icone'

const NotFound = () => (
  <PageHero
    kicker="Erro 404"
    linhas={['Fora do', <span className="contorno">percurso</span>]}
    texto="Essa página não existe ou mudou de lugar. Volta pra pista: a gente te leva de novo ao início."
    palavraFundo="404"
  >
    <Acoes>
      <Botao as={Link} to="/" $variante="claro">
        Voltar ao início
        <Icone nome="seta" tamanho={20} traco={2.5} />
      </Botao>
      <Botao as={Link} to="/produtos" $variante="contorno">
        Ver produtos
      </Botao>
    </Acoes>
  </PageHero>
)

export default NotFound
