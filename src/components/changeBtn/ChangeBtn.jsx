import React, { useState } from 'react'
import Home from '../../Pages/Home'

export default function ChangeBtn({onClick}) {
    
  return (
    <div>
      <button onClick={onClick}>Нажми меня</button>
    </div>
  )
}
