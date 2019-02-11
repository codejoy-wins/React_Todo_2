import React from 'react'

export default function Max() {
  return (
    <div style={maxStyle}>
      <h2>custom component</h2>
    </div>
  )
}

const maxStyle = {
    background: 'blue',
    color: 'aqua',
    textAlign: 'center',
    padding: '5px'
}