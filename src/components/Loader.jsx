import React from 'react'
import { SyncLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems: "center", margin:"8rem"}}><SyncLoader
    color="#17174A"
    size={60}
    speedMultiplier={0.6}
  /></div>
  )
}
