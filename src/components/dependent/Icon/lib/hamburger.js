import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Hamburger({ color = 'black', width, height, ...rest }) {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} {...rest}>
      <path
        fill={color}
        d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z"
      />
    </svg>
  )
}
