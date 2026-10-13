import React, { useEffect, useState } from 'react'
import { movimentoReduzido, useNaTela } from './movimento'

const formatar = (n, casas) =>
  n.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })

// Número que conta de 0 até `valor` quando aparece na tela.
const Contador = ({ valor, duracao = 1400, className }) => {
  const casas = Number.isInteger(valor) ? 0 : 1
  const [ref, visivel] = useNaTela({ threshold: 0.6 })
  const [atual, setAtual] = useState(0)

  useEffect(() => {
    if (!visivel) return undefined
    if (movimentoReduzido()) {
      setAtual(valor)
      return undefined
    }
    let quadro = 0
    const inicio = performance.now()
    const passo = (agora) => {
      const t = Math.min((agora - inicio) / duracao, 1)
      const suave = 1 - Math.pow(1 - t, 4)
      setAtual(valor * suave)
      if (t < 1) quadro = requestAnimationFrame(passo)
    }
    quadro = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(quadro)
  }, [visivel, valor, duracao])

  return (
    <span ref={ref} className={className}>
      {formatar(atual, casas)}
    </span>
  )
}

export default Contador
