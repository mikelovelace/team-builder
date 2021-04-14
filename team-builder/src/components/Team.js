import React from 'react'

// 1. details props
// 2. display details.username email and role


export default function Team(props) {
  const { details } = props // 1.

  return (
    <div>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}