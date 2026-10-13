import { useEffect, useRef, useState } from 'react'

export const movimentoReduzido = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Observa todo elemento com [data-reveal] (inclusive os que entram depois,
// como ao trocar de aba) e marca com data-visivel quando aparece na tela.
// Usa um atributo que o React não controla, então re-renders não o apagam.
export function useReveal(chave) {
  useEffect(() => {
    const marcar = (el) => el.setAttribute('data-visivel', '')

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(marcar)
      return undefined
    }

    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            marcar(e.target)
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )

    const observar = (raiz) => {
      if (raiz.matches?.('[data-reveal]:not([data-visivel])')) io.observe(raiz)
      raiz.querySelectorAll?.('[data-reveal]:not([data-visivel])').forEach((el) => io.observe(el))
    }

    observar(document)
    const mo = new MutationObserver((mudancas) =>
      mudancas.forEach((m) => m.addedNodes.forEach((n) => n.nodeType === 1 && observar(n)))
    )
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [chave])
}

// true quando o elemento aparece na tela pela primeira vez
export function useNaTela(opcoes = { threshold: 0.35 }) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (!('IntersectionObserver' in window)) {
      setVisivel(true)
      return undefined
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisivel(true)
        io.disconnect()
      }
    }, opcoes)
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, visivel]
}

// Inclinação 3D que segue o ponteiro (só em dispositivos com hover).
export function useInclinacao(maximo = 10) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || movimentoReduzido() || !window.matchMedia('(hover: hover)').matches) return undefined

    let quadro = 0
    const mover = (ev) => {
      const r = el.getBoundingClientRect()
      const x = (ev.clientX - r.left) / r.width - 0.5
      const y = (ev.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(quadro)
      quadro = requestAnimationFrame(() => {
        el.style.setProperty('--rx', `${(-y * maximo).toFixed(2)}deg`)
        el.style.setProperty('--ry', `${(x * maximo).toFixed(2)}deg`)
        el.style.setProperty('--px', `${((x + 0.5) * 100).toFixed(1)}%`)
        el.style.setProperty('--py', `${((y + 0.5) * 100).toFixed(1)}%`)
      })
    }
    const sair = () => {
      cancelAnimationFrame(quadro)
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }

    el.addEventListener('pointermove', mover)
    el.addEventListener('pointerleave', sair)
    return () => {
      cancelAnimationFrame(quadro)
      el.removeEventListener('pointermove', mover)
      el.removeEventListener('pointerleave', sair)
    }
  }, [maximo])

  return ref
}
