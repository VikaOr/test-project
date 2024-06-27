import React from 'react'

export default function Modification({isOpen}) {
    let text;
    (isOpen)? text = 'open': text = 'close';
  return (
    <div>
      Счетчик: {text}
    </div>
  )
}
