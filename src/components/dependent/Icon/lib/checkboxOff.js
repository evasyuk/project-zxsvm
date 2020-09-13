import React from 'react'

// eslint-disable-next-line react/prop-types
export default function CheckboxOff({ color, ...rest }) {
  return (
    <svg viewBox="0 0 20 20" {...rest}>
      <path
        fill="currentColor"
        d="M14.566 3.653a.338.338 0 0 1 .25-.094c.104 0 .198.031.281.094l.875.906a.297.297 0 0 1 .125.25.389.389 0 0 1-.125.281l-9.375 9.375a.338.338 0 0 1-.25.094.457.457 0 0 1-.28-.094L1.91 10.278a.297.297 0 0 1-.125-.25c0-.105.042-.198.125-.282l.875-.875a.389.389 0 0 1 .281-.125c.104 0 .188.042.25.125l3.031 3.032 8.22-8.25z"
      />
    </svg>
  )
}
