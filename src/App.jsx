import React, { useState, useMemo } from 'react'
import LetterBox from './components/LetterBox'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const INITIAL_WORDS = [
  { word: 'NODEJS', hint: 'Biblioteca feita em JavaScript utilizada no backend.' },
  { word: 'REACT', hint: 'Biblioteca para criar interfaces Web com Javascript.' },
  { word: 'JAVASCRIPT', hint: 'Linguagem de programação das páginas Web.' },
  { word: 'COMPONENTE', hint: 'Peça reutilizável de UI.' },
  { word: 'ESTADO', hint: 'Dados locais que mudam durante a execução.' },
  { word: 'PROPS', hint: 'Propriedades passadas para componentes.' },
  { word: 'HOOKS', hint: 'Funções especiais para gerenciar estado e efeitos.' },
  { word: 'VITE', hint: 'Ferramenta de build moderna para projetos frontend.' },
  { word: 'WEBPACK', hint: 'Empacotador de módulos muito usado no passado.' },
  { word: 'PROMISE', hint: 'Objeto para lidar com operações assíncronas.' },
  { word: 'ASYNC', hint: 'Palavra-chave para funções assíncronas.' },
  { word: 'FUNCIONAL', hint: 'Estilo de componentes baseado em funções.' },
  { word: 'ELEMENTO', hint: 'Unidade mínima do React criada com JSX.' },
  { word: 'ROTA', hint: 'Caminho que mapeia URLs a componentes.' },
  { word: 'SERVIDOR', hint: 'Máquina que responde a requisições HTTP.' }
]

export default function App() {
  const [seedIndex, setSeedIndex] = useState(0)
  const [words, setWords] = useState(INITIAL_WORDS)
  const { word, hint } = useMemo(() => words[seedIndex % words.length], [seedIndex, words])

  const [guessed, setGuessed] = useState(new Set())
  const [used, setUsed] = useState([])
  const [attemptsLeft, setAttemptsLeft] = useState(10)
  const [input, setInput] = useState('')

  const letters = word.split('')

  function handleGuessLetter(letter) {
    if (used.includes(letter) || attemptsLeft <= 0) return
    setUsed(prev => [...prev, letter])
    if (word.includes(letter)) {
      setGuessed(prev => new Set(prev).add(letter))
    } else {
      setAttemptsLeft(a => a - 1)
    }
  }

  function handleConfirm() {
    const letter = input.trim().toUpperCase()
    if (letter && letter.length === 1 && ALPHABET.includes(letter)) {
      handleGuessLetter(letter)
    }
    setInput('')
  }

  function handleRestart() {
    setSeedIndex(i => i + 1)
    setGuessed(new Set())
    setUsed([])
    setAttemptsLeft(10)
    setInput('')
  }


  const allRevealed = letters.every(l => guessed.has(l))

  return (
    <div className="container">
      <div className="card">
        <img src="/logo.png" alt="logo" className="logo" />

        <div className="attempts-row">
          <div className="attempts">{attemptsLeft} de 10 tentativas</div>
          <button className="restart" onClick={handleRestart} title="Reiniciar">
            <img src="/Frame.jpg" alt="reiniciar" />
          </button>
        </div>

        <div className="hint">
          <strong>Dica</strong>
          <p>{hint}</p>
        </div>

        <div className="word-row" style={{ gridTemplateColumns: `repeat(${letters.length}, 1fr)` }}>
          {letters.map((l, i) => (
            <LetterBox key={i} letter={l} revealed={guessed.has(l) || allRevealed} />
          ))}
        </div>

        <div className="input-row">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleConfirm(); } }}
            maxLength={1}
            className="letter-input"
            placeholder="Palpite"
          />
          <button onClick={handleConfirm} className="confirm">Confirmar</button>
        </div>

        <div className="alphabet">
          {ALPHABET.map(a => (
            <button
              key={a}
              className={`alpha-btn ${used.includes(a) ? (word.includes(a) ? 'used-correct' : 'used-wrong') : ''}`}
              onClick={() => handleGuessLetter(a)}
              disabled={used.includes(a) || attemptsLeft <= 0 || allRevealed}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="used-letters">
          <div className="label">Letras utilizadas</div>
          <div className="used-list">
            {used.map((u, i) => (
              <div key={i} className={`used ${word.includes(u) ? 'correct' : 'wrong'}`}>{u}</div>
            ))}
          </div>
        </div>

        {/* Form to add words removed as requested */}

        {allRevealed && <div className="result success">Parabéns! Você acertou.</div>}
        {attemptsLeft <= 0 && !allRevealed && <div className="result fail">Fim de tentativas. Palavra: {word}</div>}
      </div>
    </div>
  )
}
