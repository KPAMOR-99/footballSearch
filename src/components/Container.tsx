import type { ReactNode } from "react"

interface props {
    children: ReactNode
    className?: string
}

const Container = ({ children, className }:props) => {
  return (
    <div className= { `m-2 p-2 rounded-sm ${className}`}>
    
        { children }
    </div>
  )
}

export default Container