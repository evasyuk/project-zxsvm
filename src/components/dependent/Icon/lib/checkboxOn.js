import React from 'react'

// eslint-disable-next-line react/prop-types
export default function CheckboxOn({ bgColor, color, ...rest }) {
  return (
    <svg viewBox="0 0 16 16" {...rest}>
      <rect
        fill={bgColor || '#007dd7'}
        width="16"
        height="16"
        rx="4"
        d="M0 0h16v16H0z"
      />
      <path
        fill={color || '#fff'}
        d="M10.33.84a.263.263 0 0 1 .194-.072c.08 0 .154.024.218.073l.681.705a.231.231 0 0 1 .097.194.302.302 0 0 1-.097.219L4.131 9.251a.263.263 0 0 1-.194.073.355.355 0 0 1-.219-.073L.485 5.994a.231.231 0 0 1-.097-.195c0-.08.033-.154.097-.219l.681-.68a.302.302 0 0 1 .219-.097c.08 0 .146.032.194.097l2.358 2.358L10.329.84z"
        transform="translate(2 3)"
      />
    </svg>
  )
}
