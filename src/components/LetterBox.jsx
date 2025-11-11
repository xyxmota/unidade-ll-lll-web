import React from 'react'

export default function LetterBox({ letter, revealed }) {
  return (
    <div className={`letter-box ${revealed ? 'revealed' : ''}`}>
      {revealed ? letter : ''}
    </div>
  )
}
